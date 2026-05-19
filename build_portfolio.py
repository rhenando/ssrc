import json, math

BASE = "https://ssrc.online/wp-content/uploads/2026/04/"
PIN = "<svg width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' style='flex-shrink:0;'><path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'/><circle cx='12' cy='10' r='3'/></svg>"

EN_DATA = [
    {"cat":"Urban Development","title":"Tharwat Town Marine Works","loc":"Saudi Arabia","desc":"Marine reclamation works and shore protection design for 4,400,000 m\u00b2 land development. Preparation of bid package, contract documents, and technical support during execution (2016\u20132018).","images":["tharwat2.png","tharwat1.png","tharwat.png"]},
    {"cat":"Urban Development","title":"Concept Master Plan \u2014 New Island KFCA","loc":"King Fahd Causeway Authority, KSA","desc":"Preparation and design of Concept Master Plan for development of the Saudi Side new Island as a commercial and entertainment hub for the King Fahd Causeway Authority.","images":["concept.png","concept1.png",None]},
    {"cat":"Architectural & Building","title":"King Salman Reservation \u2014 Tubaiq","loc":"Saudi Arabia","desc":"Preparation of Master Plan and Architectural design concept and theme park for a prestigious project including HQ building and facilities for King Salman Reservation.","images":["architectural.png",None,None]},
    {"cat":"Structural & Building","title":"Oxagon Terminal Warehouse \u2014 NEOM","loc":"Saudi Arabia","desc":"Structural modeling for a highly technical warehouse design measuring 500m \u00d7 450m \u00d7 85m \u2014 one of the largest structural modeling projects in the region.","images":["oxagon.png",None,None]},
    {"cat":"MEP / Infrastructure","title":"Pipe Stress Analysis & Vibration Model","loc":"Jubail, Saudi Arabia","desc":"Pipe stress analysis by CAESAR-II for several pipelines and process equipment installations. 3D modeling of piping and equipment arrangements for various plant and pipeline projects.","images":["pipe.png",None,None]},
    {"cat":"MEP / Infrastructure","title":"QGWP Detailed Piping Design","loc":"Qatar (with Veolia ME)","desc":"Detailed design of piping system, stress analysis, structural modeling, fabrication drawings including isometrics, equipment skids, pipe supports, foundations, and platform design.","images":["qgwp.png",None,None]},
    {"cat":"Urban Development","title":"Cornish Al-Khobar Development Marine Works","loc":"Al-Khobar, Saudi Arabia","desc":"Design and reclamation, shore protection and ground improvement for 3,000,000 m\u00b2 of new development. Comprehensive infrastructure works along the Al-Khobar corniche.","images":["cornish.png",None,None]},
    {"cat":"Architectural & Building","title":"Building Project Cost Engineering","loc":"Mekkah, Saudi Arabia","desc":"Preparation of BOQs, material specifications, and tender design support for a major building complex in Mekkah with extensive MEP systems. Review and development of architectural finishing drawings, fire and life safety plans.","images":["building.png",None,None]},
    {"cat":"Structural & Assessment","title":"Structural Assessment \u2014 STC Sites","loc":"Saudi Arabia","desc":"Structural assessment for up to 40 exchange buildings for STC including concrete repairs, structural strengthening measures, and comprehensive design supervision.","images":["structural.png",None,None]},
    {"cat":"Structural & Building","title":"Riyadh International Convention & Exhibition Center","loc":"Riyadh, Saudi Arabia","desc":"Structural design and connection design, shop drawing preparation, and 3D Tekla model development for the premium convention and exhibition hospitality building.","images":["riyadh.png",None,None]},
    {"cat":"Design & Documentation","title":"Shop & Fabrication Drawings","loc":"Various Locations","desc":"Comprehensive shop and fabrication drawing packages covering structural steel, MEP systems, equipment skids, and detailed fabrication specifications across multiple projects.","images":["plenty.png",None,None]},
]

AR_DATA = [
    {"cat":"\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a","title":"\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0628\u062d\u0631 \u2014 \u0637\u0631\u0648\u0627\u0637 \u062a\u0627\u0648\u0646","loc":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0635\u0644\u0627\u062d \u0627\u0644\u0628\u062d\u0631\u064a \u0648\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0633\u0627\u062d\u0644\u064a\u0629 \u0644\u062a\u0637\u0648\u064a\u0631 \u0623\u0631\u0627\u0636\u064d \u0628\u0645\u0633\u0627\u062d\u0629 4,400,000 \u0645\u00b2. \u0625\u0639\u062f\u0627\u062f \u0648\u062b\u0627\u0626\u0642 \u0627\u0644\u0639\u0637\u0627\u0621 \u0648\u0639\u0642\u0648\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0648\u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0641\u0646\u064a \u062e\u0644\u0627\u0644 \u0627\u0644\u062a\u0646\u0641\u064a\u0630 (2016\u20132018).","images":["tharwat2.png","tharwat1.png","tharwat.png"]},
    {"cat":"\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a","title":"\u0627\u0644\u0645\u062e\u0637\u0637 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645\u064a \u2014 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 KFCA","loc":"\u0647\u064a\u0626\u0629 \u062c\u0633\u0631 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062f\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0625\u0639\u062f\u0627\u062f \u0648\u062a\u0635\u0645\u064a\u0645 \u0645\u062e\u0637\u0637 \u0631\u0626\u064a\u0633\u064a \u0645\u0641\u0627\u0647\u064a\u0645\u064a \u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u062c\u0632\u064a\u0631\u0629 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u062c\u0627\u0646\u0628 \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0643\u0645\u0631\u0643\u0632 \u062a\u062c\u0627\u0631\u064a \u0648\u062a\u0631\u0641\u064a\u0647\u064a \u0644\u0647\u064a\u0626\u0629 \u062c\u0633\u0631 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062f.","images":["concept.png","concept1.png",None]},
    {"cat":"\u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a \u0648\u0627\u0644\u0628\u0646\u0627\u0621","title":"\u0645\u062d\u0645\u064a\u0629 \u0627\u0644\u0645\u0644\u0643 \u0633\u0644\u0645\u0627\u0646 \u2014 \u062a\u0628\u0648\u0642","loc":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0625\u0639\u062f\u0627\u062f \u0627\u0644\u0645\u062e\u0637\u0637 \u0627\u0644\u0631\u0626\u064a\u0633\u064a \u0648\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645\u064a \u0648\u0645\u062a\u0646\u0632\u0647 \u0627\u0644\u0623\u0644\u0639\u0627\u0628 \u0644\u0645\u0634\u0631\u0648\u0639 \u0645\u0631\u0645\u0648\u0642 \u064a\u0636\u0645 \u0645\u0628\u0646\u0649 \u0627\u0644\u0645\u0642\u0631 \u0648\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0645\u062d\u0645\u064a\u0629 \u0627\u0644\u0645\u0644\u0643 \u0633\u0644\u0645\u0627\u0646.","images":["architectural.png",None,None]},
    {"cat":"\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u0628\u0646\u0627\u0621","title":"\u0645\u0633\u062a\u0648\u062f\u0639 \u0623\u0648\u0643\u0633\u0627\u062c\u0648\u0646 \u0627\u0644\u0637\u0631\u0641\u064a \u2014 \u0646\u064a\u0648\u0645","loc":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a\u0629 \u0644\u062a\u0635\u0645\u064a\u0645 \u0645\u0633\u062a\u0648\u062f\u0639 \u0639\u0627\u0644\u064a \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0628\u0623\u0628\u0639\u0627\u062f 500\u0645 \u00d7 450\u0645 \u00d7 85\u0645.","images":["oxagon.png",None,None]},
    {"cat":"\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629","title":"\u062a\u062d\u0644\u064a\u0644 \u0625\u062c\u0647\u0627\u062f \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0648\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0627\u0647\u062a\u0632\u0627\u0632","loc":"\u0627\u0644\u062c\u0628\u064a\u0644\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u062a\u062d\u0644\u064a\u0644 \u0625\u062c\u0647\u0627\u062f \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 CAESAR-II \u0644\u0639\u062f\u0629 \u062e\u0637\u0648\u0637 \u0623\u0646\u0627\u0628\u064a\u0628 \u0648\u062a\u0631\u0643\u064a\u0628\u0627\u062a \u0645\u0639\u062f\u0627\u062a \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a.","images":["pipe.png",None,None]},
    {"cat":"\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629","title":"\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0627\u0644\u062a\u0641\u0635\u064a\u0644\u064a \u2014 QGWP","loc":"\u0642\u0637\u0631 (\u0645\u0639 Veolia ME)","desc":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u062a\u0641\u0635\u064a\u0644\u064a \u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0623\u0646\u0627\u0628\u064a\u0628 \u0648\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0625\u062c\u0647\u0627\u062f \u0648\u0627\u0644\u0646\u0645\u0630\u062c\u0629 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a\u0629 \u0648\u0631\u0633\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0635\u0646\u064a\u0639.","images":["qgwp.png",None,None]},
    {"cat":"\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a","title":"\u0623\u0639\u0645\u0627\u0644 \u0643\u0648\u0631\u0646\u064a\u0634 \u0627\u0644\u062e\u0628\u0631 \u0627\u0644\u0628\u062d\u0631\u064a\u0629","loc":"\u0627\u0644\u062e\u0628\u0631\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0627\u0633\u062a\u0635\u0644\u0627\u062d \u0648\u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0633\u0627\u062d\u0644\u064a\u0629 \u0648\u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u062a\u0631\u0628\u0629 \u0644\u062a\u0637\u0648\u064a\u0631 3,000,000 \u0645\u00b2.","images":["cornish.png",None,None]},
    {"cat":"\u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a \u0648\u0627\u0644\u0628\u0646\u0627\u0621","title":"\u0647\u0646\u062f\u0633\u0629 \u062a\u0643\u0644\u0641\u0629 \u0645\u0634\u0627\u0631\u064a\u0639 \u0627\u0644\u0628\u0646\u0627\u0621","loc":"\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0625\u0639\u062f\u0627\u062f \u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0643\u0645\u064a\u0627\u062a \u0648\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062a \u0627\u0644\u0645\u0627\u062f\u064a\u0629 \u0648\u062f\u0639\u0645 \u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0644\u0644\u0645\u0646\u0627\u0642\u0635\u0629.","images":["building.png",None,None]},
    {"cat":"\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u062a\u0642\u064a\u064a\u0645","title":"\u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a \u2014 \u0645\u0648\u0627\u0642\u0639 STC","loc":"\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0627\u0644\u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a \u0644\u0645\u0627 \u064a\u0635\u0644 \u0625\u0644\u0649 40 \u0645\u0628\u0646\u0649 \u0644\u0635\u0627\u0644\u062d STC.","images":["structural.png",None,None]},
    {"cat":"\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u0628\u0646\u0627\u0621","title":"\u0645\u0631\u0643\u0632 \u0627\u0644\u0631\u064a\u0627\u0636 \u0627\u0644\u062f\u0648\u0644\u064a \u0644\u0644\u0645\u0624\u062a\u0645\u0631\u0627\u062a \u0648\u0627\u0644\u0645\u0639\u0627\u0631\u0636","loc":"\u0627\u0644\u0631\u064a\u0627\u0636\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629","desc":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a \u0648\u0625\u0639\u062f\u0627\u062f \u0631\u0633\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0635\u0646\u064a\u0639 \u0648\u062a\u0637\u0648\u064a\u0631 \u0646\u0645\u0648\u0630\u062c Tekla \u062b\u0644\u0627\u062b\u064a \u0627\u0644\u0623\u0628\u0639\u0627\u062f.","images":["riyadh.png",None,None]},
    {"cat":"\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u062a\u0648\u062b\u064a\u0642","title":"\u0631\u0633\u0648\u0645\u0627\u062a \u0627\u0644\u0648\u0631\u0634\u0629 \u0648\u0627\u0644\u062a\u0635\u0646\u064a\u0639","loc":"\u0645\u0648\u0627\u0642\u0639 \u0645\u062a\u0639\u062f\u062f\u0629","desc":"\u062d\u0632\u0645 \u0631\u0633\u0648\u0645\u0627\u062a \u0648\u0631\u0634\u0629 \u0648\u062a\u0635\u0646\u064a\u0639 \u0634\u0627\u0645\u0644\u0629 \u062a\u063a\u0637\u064a \u0627\u0644\u0641\u0648\u0644\u0627\u0630 \u0627\u0644\u0625\u0646\u0634\u0627\u0626\u064a \u0648\u0623\u0646\u0638\u0645\u0629 MEP.","images":["plenty.png",None,None]},
]

CC_EN = {"Urban Development":"#66d4c8","Architectural & Building":"#a78bfa","Structural & Building":"#f9a825","Structural & Assessment":"#f9a825","MEP / Infrastructure":"#4fc3f7","Design & Documentation":"#f48fb1"}
CC_AR = {"\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0639\u0645\u0631\u0627\u0646\u064a":"#66d4c8","\u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064a \u0648\u0627\u0644\u0628\u0646\u0627\u0621":"#a78bfa","\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u0628\u0646\u0627\u0621":"#f9a825","\u0627\u0644\u0625\u0646\u0634\u0627\u0621\u0627\u062a \u0648\u0627\u0644\u062a\u0642\u064a\u064a\u0645":"#f9a825","\u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0648\u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u062d\u062a\u064a\u0629":"#4fc3f7","\u0627\u0644\u062a\u0635\u0645\u064a\u0645 \u0648\u0627\u0644\u062a\u0648\u062b\u064a\u0642":"#f48fb1"}

# Dark placeholder for missing images
def _placeholder(color="#008080"):
    return (
        "<div style='width:100%;height:100%;display:flex;align-items:center;justify-content:center;"
        f"background:linear-gradient(135deg,{color}18 0%,{color}08 100%);'>"
        f"<svg width='52' height='52' viewBox='0 0 24 24' fill='none' stroke='{color}' stroke-width='.7' opacity='.3'>"
        "<rect x='3' y='3' width='18' height='18' rx='2'/><circle cx='8.5' cy='8.5' r='1.5'/>"
        "<polyline points='21 15 16 10 5 21'/></svg></div>"
    )


def _img(src, eager=False):
    return f"<img src='{src}' loading='{'eager' if eager else 'lazy'}' alt=''>"


def build_slide_en(i, p, cc):
    """Turner-style: image half + text half, alternating sides."""
    imgs  = [BASE + img for img in p["images"] if img]
    cat   = p["cat"]
    color = cc.get(cat, "#008080")
    num   = f"{i+1:02d} / {len(EN_DATA):02d}"
    even  = " pg-even" if i % 2 == 1 else ""
    if imgs:
        single = " pg-img-row--single" if len(imgs) == 1 else ""
        row = "".join(_img(s, eager=(i==0 and j==0)) for j,s in enumerate(imgs))
        img_h = f"<div class='pg-img-row{single}'>{row}</div>"
    else:
        img_h = _placeholder(color)
    return (
        f"<div class='pgs{even}' data-cat='{cat}' data-idx='{i}'>"
        f"<div class='pg-img-side'>{img_h}</div>"
        f"<div class='pg-text-side'>"
        f"<div class='pg-accent-bar'></div>"
        f"<div class='pg-cat' style='color:{color};'>{cat}</div>"
        f"<h3 class='pg-title'>{p['title']}</h3>"
        f"<div class='pg-loc'>{PIN}&nbsp;{p['loc']}</div>"
        f"<div class='pg-rule' style='background:{color};'></div>"
        f"<p class='pg-desc'>{p['desc']}</p>"
        f"<div class='pg-num'>{num}</div>"
        f"</div></div>"
    )


def build_slide_ar(i, p, cc):
    """Turner-style AR: alternating sides, RTL text."""
    imgs  = [BASE + img for img in p["images"] if img]
    cat   = p["cat"]
    color = cc.get(cat, "#008080")
    num   = f"{i+1:02d} / {len(AR_DATA):02d}"
    even  = " pg-even" if i % 2 == 1 else ""
    if imgs:
        single = " pg-img-row--single" if len(imgs) == 1 else ""
        row = "".join(_img(s, eager=(i==0 and j==0)) for j,s in enumerate(imgs))
        img_h = f"<div class='pg-img-row{single}'>{row}</div>"
    else:
        img_h = _placeholder(color)
    return (
        f"<div class='pgs-ar{even}' data-cat='{cat}' data-idx='{i}' dir='rtl'>"
        f"<div class='pg-img-side'>{img_h}</div>"
        f"<div class='pg-text-side pg-text-ar'>"
        f"<div class='pg-accent-bar'></div>"
        f"<div class='pg-cat' style='color:{color};font-family:Cairo,Arial,sans-serif;letter-spacing:1px;'>{cat}</div>"
        f"<h3 class='pg-title' style='font-family:Cairo,Arial,sans-serif;'>{p['title']}</h3>"
        f"<div class='pg-loc pg-loc-ar'>{p['loc']}&nbsp;{PIN}</div>"
        f"<div class='pg-rule pg-rule-ar' style='background:{color};'></div>"
        f"<p class='pg-desc' style='font-family:Cairo,Arial,sans-serif;'>{p['desc']}</p>"
        f"<div class='pg-num'>{num}</div>"
        f"</div></div>"
    )


def make_js(scroll_id, root_id, slide_class, prev_id, next_id):
    """Vertical scroll JS — no dots, left/right carets only."""
    return (
        f"<script>(function(){{"
        f"var scroll=document.getElementById('{scroll_id}');"
        f"var prev=document.getElementById('{prev_id}');"
        f"var nxt=document.getElementById('{next_id}');"
        f"var ALL=Array.from(scroll.querySelectorAll('.{slide_class}'));"
        f"var vis=ALL.slice(),act=0,timer=null,animating=false,secVis=false;"
        f"function smoothTo(slide,dur){{"
        f"if(animating)return;"
        f"animating=true;"
        f"var start=scroll.scrollTop,end=slide.offsetTop,diff=end-start,t0=null;"
        f"function ease(t){{return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}}"
        f"(function step(ts){{"
        f"if(!t0)t0=ts;"
        f"var p=Math.min((ts-t0)/dur,1);"
        f"scroll.scrollTop=start+diff*ease(p);"
        f"if(p<1)requestAnimationFrame(step);else{{animating=false;updateCarets();}}"
        f"}})(performance.now());}}"
        f"function updateCarets(){{"
        f"if(!secVis){{prev.classList.remove('visible');nxt.classList.remove('visible');return;}}"
        f"prev.classList.toggle('visible',act>0);"
        f"nxt.classList.toggle('visible',act<vis.length-1);"
        f"prev.classList.toggle('pg-hide',act<=0);"
        f"nxt.classList.toggle('pg-hide',act>=vis.length-1);}}"
        f"prev.addEventListener('click',function(){{"
        f"if(animating)return;"
        f"var n=Math.max(act-1,0);if(vis[n]){{smoothTo(vis[n],900);resetTimer();}}}});"
        f"nxt.addEventListener('click',function(){{"
        f"if(animating)return;"
        f"var n=Math.min(act+1,vis.length-1);if(vis[n]){{smoothTo(vis[n],900);resetTimer();}}}});"
        f"(function(){{"
        f"var o=new IntersectionObserver(function(en){{"
        f"en.forEach(function(e){{"
        f"if(e.isIntersecting&&e.intersectionRatio>=0.5){{"
        f"var idx=vis.indexOf(e.target);if(idx>=0){{act=idx;updateCarets();}}}}"
        f"}});}},{{root:scroll,threshold:0.5}});"
        f"ALL.forEach(function(s){{o.observe(s);}});"
        f"}})();"
        f"new IntersectionObserver(function(en){{"
        f"en.forEach(function(e){{"
        f"secVis=e.isIntersecting;updateCarets();"
        f"}});}},{{threshold:0.1}}).observe(document.getElementById('{root_id}'));"
        f"function advance(){{"
        f"if(!secVis||animating)return;"
        f"var nx=(act+1)%vis.length;if(vis[nx])smoothTo(vis[nx],900);}}"
        f"function startTimer(){{timer=setInterval(advance,10000);}}"
        f"function resetTimer(){{clearInterval(timer);startTimer();}}"
        f"startTimer();"
        f"}}());</script>"
    )

EN_HDR = (
    "<div id='pg-hdr' style='text-align:center;font-family:Inter,sans-serif;"
    "padding:32px 64px 24px;flex-shrink:0;background:#fff;border-bottom:1px solid #e8ebf0;'>"
    "<span style='display:inline-block;font-size:10px;font-weight:700;color:#008080;letter-spacing:3px;"
    "border:1px solid rgba(0,128,128,.2);padding:5px 18px;border-radius:100px;text-transform:uppercase;'>Portfolio</span>"
    "<h2 style='font-family:Playfair Display,serif;font-size:34px;font-weight:900;color:#003366;"
    "margin:14px 0 0;line-height:1.3;'>Projects <span style=\"color:#008080;\">Experience</span></h2>"
    "</div>"
)

SLIDE_CSS = (
    # EN slide
    ".pgs{height:100%;display:flex;flex-direction:row;"
    "scroll-snap-align:start;scroll-snap-stop:always;"
    "background:#fff;border-bottom:1px solid #e8ebf0;overflow:hidden;}"
    ".pgs.pg-even{flex-direction:row-reverse;}"
    # AR slide
    ".pgs-ar{height:100%;display:flex;flex-direction:row;"
    "scroll-snap-align:start;scroll-snap-stop:always;"
    "background:#fff;border-bottom:1px solid #e8ebf0;overflow:hidden;}"
    ".pgs-ar.pg-even{flex-direction:row-reverse;}"
    # Image side
    ".pg-img-side{flex:0 0 50%;position:relative;overflow:hidden;background:linear-gradient(135deg,#e6f3f3 0%,#f0f2f5 100%);}"
    ".pg-img-row{display:flex;flex-direction:column;width:100%;height:100%;gap:3px;}"
    ".pg-img-row img{flex:1;min-height:0;width:100%;object-fit:cover;display:block;will-change:transform;filter:brightness(.88) contrast(1.08) saturate(.85);}"
    ".pg-img-row:not(.pg-img-row--single){gap:8px;}"
    ".pg-img-row--single{justify-content:center;}"
    ".pg-img-row--single img{flex:0 0 200px;height:200px;min-height:0;}"
    # Text side
    ".pg-text-side{flex:1;display:flex;flex-direction:column;"
    "justify-content:center;padding:60px 72px;position:relative;}"
    ".pg-text-ar{text-align:right;}"
    # Vertical accent bar between image and text
    ".pg-accent-bar{position:absolute;top:10%;bottom:10%;width:2px;background:#e0e4ea;}"
    ".pgs:not(.pg-even) .pg-text-side .pg-accent-bar{left:0;}"
    ".pgs.pg-even .pg-text-side .pg-accent-bar{right:0;}"
    ".pgs-ar:not(.pg-even) .pg-text-side .pg-accent-bar{right:0;}"
    ".pgs-ar.pg-even .pg-text-side .pg-accent-bar{left:0;}"
    # Category label
    ".pg-cat{font-size:10px;font-weight:700;letter-spacing:3px;"
    "text-transform:uppercase;font-family:Inter,sans-serif;margin-bottom:16px;}"
    # Title
    ".pg-title{font-family:'Playfair Display',serif;font-size:32px;font-weight:900;"
    "color:#003366;line-height:1.2;margin:0 0 12px;}"
    # Location
    ".pg-loc{font-size:11px;color:#6b7a8d;margin-bottom:18px;"
    "display:flex;align-items:center;gap:6px;font-family:Inter,sans-serif;}"
    ".pg-loc-ar{justify-content:flex-end;}"
    # Rule
    ".pg-rule{width:32px;height:2px;border-radius:2px;margin-bottom:18px;}"
    ".pg-rule-ar{margin-right:0;margin-left:auto;}"
    # Description
    ".pg-desc{font-size:13.5px;color:#3d4f63;line-height:1.9;max-width:400px;"
    "font-family:Inter,sans-serif;}"
    ".pg-text-ar .pg-desc{margin-right:0;margin-left:auto;}"
    # Slide counter
    ".pg-num{font-size:10.5px;color:rgba(0,51,102,.18);letter-spacing:2px;"
    "margin-top:24px;font-family:Inter,sans-serif;}"
    # Tablet
    "@media(max-width:1024px){"
    ".pg-text-side{padding:44px 48px;}"
    ".pg-title{font-size:26px;}"
    ".pg-desc{font-size:13px;}"
    "}"
    # Mobile
    "@media(max-width:768px){"
    ".pgs,.pgs.pg-even,.pgs-ar,.pgs-ar.pg-even{flex-direction:column;}"
    ".pg-img-side{flex:0 0 42%;}"
    ".pg-text-side{flex:1;padding:24px 20px;}"
    ".pg-title{font-size:20px;}"
    ".pg-desc{font-size:12px;}"
    ".pg-accent-bar{display:none;}"
    "}"
)

def build_en_html():
    L = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M15 18l-6-6 6-6'/></svg>"
    R = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M9 18l6-6-6-6'/></svg>"
    css = (
        "<style>"
        "#pg-root{display:flex;flex-direction:column;height:100vh;height:100dvh;"
        "overflow:hidden;width:100%;background:#fff;position:relative;}"
        "#pg-scroll{flex:1;min-height:0;overflow-y:hidden;overflow-x:hidden;"
        "scroll-snap-type:y mandatory;scrollbar-width:none;}"
        "#pg-scroll::-webkit-scrollbar{display:none;}"
        + SLIDE_CSS +
        ".pg-caret{position:absolute;top:50%;transform:translateY(-50%);z-index:200;"
        "width:48px;height:48px;border-radius:50%;"
        "border:1px solid rgba(0,51,102,.15);background:rgba(255,255,255,.95);"
        "display:flex;align-items:center;justify-content:center;"
        "cursor:pointer;opacity:0;transition:opacity .3s,background .2s,transform .2s;"
        "color:#003366;pointer-events:none;box-shadow:0 2px 16px rgba(0,51,102,.12);}"
        ".pg-caret.visible{opacity:1;pointer-events:all;}"
        ".pg-caret.pg-hide{opacity:0!important;pointer-events:none!important;}"
        ".pg-caret:hover{background:#003366;color:#fff;border-color:transparent;"
        "transform:translateY(-50%) scale(1.08);}"
        "#pg-prev{left:16px;}#pg-next{right:16px;}"
        "@media(max-width:768px){"
        "#pg-hdr{padding:18px 20px 14px !important;}"
        "#pg-hdr h2{font-size:22px !important;}"
        "#pg-prev{left:6px;}#pg-next{right:6px;}"
        "}"
        "</style>"
    )
    slides = "".join(build_slide_en(i, p, CC_EN) for i, p in enumerate(EN_DATA))
    js = make_js("pg-scroll", "pg-root", "pgs", "pg-prev", "pg-next")
    return (
        css
        + "<div id='pg-root'>" + EN_HDR
        + "<div id='pg-scroll'>" + slides + "</div>"
        + f"<button id='pg-prev' class='pg-caret'>{L}</button>"
        + f"<button id='pg-next' class='pg-caret'>{R}</button>"
        + "</div>" + js
    )

AR_HDR = (
    "<div id='pg-hdr-ar' dir='rtl' style='text-align:center;font-family:Cairo,Arial,sans-serif;"
    "padding:32px 64px 24px;flex-shrink:0;background:#fff;border-bottom:1px solid #e8ebf0;'>"
    "<span style='display:inline-block;font-size:10px;font-weight:700;color:#008080;letter-spacing:1px;"
    "border:1px solid rgba(0,128,128,.2);padding:5px 18px;border-radius:100px;'>المحفظة</span>"
    "<h2 style='font-size:34px;font-weight:900;color:#003366;margin:14px 0 0;line-height:1.4;'>"
    "خبرات <span style=\"color:#008080;\">المشاريع</span></h2>"
    "</div>"
)

def build_ar_html():
    L = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M15 18l-6-6 6-6'/></svg>"
    R = "<svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='M9 18l6-6-6-6'/></svg>"
    css = (
        "<style>"
        "#pg-root-ar{display:flex;flex-direction:column;height:100vh;height:100dvh;"
        "overflow:hidden;width:100%;background:#fff;position:relative;}"
        "#pg-scroll-ar{flex:1;min-height:0;overflow-y:hidden;overflow-x:hidden;"
        "scroll-snap-type:y mandatory;scrollbar-width:none;}"
        "#pg-scroll-ar::-webkit-scrollbar{display:none;}"
        + SLIDE_CSS +
        ".pg-info-ar .pg-cat-badge{font-family:Cairo,Arial,sans-serif;}"
        ".pg-caret-ar{position:absolute;top:50%;transform:translateY(-50%);z-index:200;"
        "width:48px;height:48px;border-radius:50%;"
        "border:1px solid rgba(0,51,102,.15);background:rgba(255,255,255,.95);"
        "display:flex;align-items:center;justify-content:center;"
        "cursor:pointer;opacity:0;transition:opacity .3s,background .2s,transform .2s;"
        "color:#003366;pointer-events:none;box-shadow:0 2px 16px rgba(0,51,102,.12);}"
        ".pg-caret-ar.visible{opacity:1;pointer-events:all;}"
        ".pg-caret-ar.pg-hide{opacity:0!important;pointer-events:none!important;}"
        ".pg-caret-ar:hover{background:#003366;color:#fff;border-color:transparent;"
        "transform:translateY(-50%) scale(1.08);}"
        "#pg-prev-ar{right:16px;}#pg-next-ar{left:16px;}"
        "@media(max-width:768px){"
        "#pg-hdr-ar{padding:18px 20px 14px !important;}"
        "#pg-hdr-ar h2{font-size:22px !important;}"
        "#pg-prev-ar{right:6px;}#pg-next-ar{left:6px;}"
        "}"
        "</style>"
    )
    slides = "".join(build_slide_ar(i, p, CC_AR) for i, p in enumerate(AR_DATA))
    js = make_js("pg-scroll-ar", "pg-root-ar", "pgs-ar", "pg-prev-ar", "pg-next-ar")
    return (
        css
        + "<div id='pg-root-ar'>" + AR_HDR
        + "<div id='pg-scroll-ar'>" + slides + "</div>"
        + f"<button id='pg-prev-ar' class='pg-caret-ar'>{R}</button>"
        + f"<button id='pg-next-ar' class='pg-caret-ar'>{L}</button>"
        + "</div>" + js
    )

def _engineering_svg():
    """Blueprint compass/radar SVG — engineering schematic aesthetic."""
    cx, cy, R = 250, 250, 215
    ticks = []
    for deg in range(0, 360, 5):
        rad = math.radians(deg - 90)
        x1 = cx + R * math.cos(rad)
        y1 = cy + R * math.sin(rad)
        major = deg % 30 == 0
        ln = 14 if major else (8 if deg % 10 == 0 else 4)
        x2 = cx + (R - ln) * math.cos(rad)
        y2 = cy + (R - ln) * math.sin(rad)
        col = "rgba(102,212,200,.55)" if major else ("rgba(0,128,128,.35)" if deg % 10 == 0 else "rgba(0,128,128,.18)")
        w = "1.5" if major else "0.8"
        ticks.append(f"<line x1='{x1:.2f}' y1='{y1:.2f}' x2='{x2:.2f}' y2='{y2:.2f}' stroke='{col}' stroke-width='{w}'/>")

    # Degree labels at 30° intervals
    labels = []
    for deg in range(0, 360, 30):
        rad = math.radians(deg - 90)
        lx = cx + (R - 30) * math.cos(rad)
        ly = cy + (R - 30) * math.sin(rad)
        labels.append(f"<text x='{lx:.1f}' y='{ly + 3:.1f}' text-anchor='middle' font-family='Inter,monospace' font-size='7' fill='rgba(102,212,200,.35)'>{deg}°</text>")

    # Expertise polygon (diamond — 4 cardinal service areas)
    poly_pts = f"{cx},{cy-160} {cx+160},{cy} {cx},{cy+160} {cx-160},{cy}"

    return (
        f"<svg id='hero-svg' viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>"
        # Rings
        f"<circle cx='{cx}' cy='{cy}' r='215' stroke='rgba(0,128,128,.2)' stroke-width='1' fill='none'/>"
        f"<circle cx='{cx}' cy='{cy}' r='170' stroke='rgba(0,128,128,.12)' stroke-width='0.5' fill='none' stroke-dasharray='3 5'/>"
        f"<circle cx='{cx}' cy='{cy}' r='125' stroke='rgba(0,128,128,.2)' stroke-width='1' fill='none'/>"
        f"<circle cx='{cx}' cy='{cy}' r='80'  stroke='rgba(0,128,128,.12)' stroke-width='0.5' fill='none' stroke-dasharray='2 4'/>"
        f"<circle cx='{cx}' cy='{cy}' r='38'  stroke='rgba(102,212,200,.35)' stroke-width='1' fill='rgba(0,128,128,.08)'/>"
        # Axis lines
        f"<line x1='{cx}' y1='20' x2='{cx}' y2='480' stroke='rgba(0,128,128,.12)' stroke-width='0.5'/>"
        f"<line x1='20' y1='{cy}' x2='480' y2='{cy}' stroke='rgba(0,128,128,.12)' stroke-width='0.5'/>"
        f"<line x1='89' y1='89' x2='411' y2='411' stroke='rgba(0,128,128,.08)' stroke-width='0.5' stroke-dasharray='4 5'/>"
        f"<line x1='411' y1='89' x2='89' y2='411' stroke='rgba(0,128,128,.08)' stroke-width='0.5' stroke-dasharray='4 5'/>"
        # Tick marks
        + "".join(ticks)
        # Degree labels
        + "".join(labels)
        # Expertise polygon
        + f"<polygon points='{poly_pts}' stroke='rgba(102,212,200,.25)' stroke-width='1' fill='rgba(0,128,128,.06)'/>"
        # Cardinal dots
        f"<circle cx='{cx}' cy='{cy-160}' r='4' fill='#66d4c8'/>"
        f"<circle cx='{cx+160}' cy='{cy}' r='4' fill='rgba(102,212,200,.5)'/>"
        f"<circle cx='{cx}' cy='{cy+160}' r='4' fill='rgba(102,212,200,.5)'/>"
        f"<circle cx='{cx-160}' cy='{cy}' r='4' fill='rgba(102,212,200,.5)'/>"
        # Service labels at cardinals
        f"<text x='{cx}' y='{cy-168}' text-anchor='middle' font-family='Inter,monospace' font-size='8.5' fill='#66d4c8' letter-spacing='2'>URBAN &amp; MARINE</text>"
        f"<text x='{cx}' y='{cy+180}' text-anchor='middle' font-family='Inter,monospace' font-size='8.5' fill='rgba(102,212,200,.5)' letter-spacing='2'>DESIGN &amp; DOCS</text>"
        f"<text x='{cx+168}' y='{cy+3}' text-anchor='start' font-family='Inter,monospace' font-size='8.5' fill='rgba(102,212,200,.5)' letter-spacing='1'>STRUCTURAL</text>"
        f"<text x='{cx-168}' y='{cy+3}' text-anchor='end' font-family='Inter,monospace' font-size='8.5' fill='rgba(102,212,200,.5)' letter-spacing='1'>MEP</text>"
        # Connection lines from center to cardinal dots
        f"<line x1='{cx}' y1='{cy}' x2='{cx}' y2='{cy-160}' stroke='rgba(102,212,200,.2)' stroke-width='1' stroke-dasharray='3 4'/>"
        f"<line x1='{cx}' y1='{cy}' x2='{cx+160}' y2='{cy}' stroke='rgba(102,212,200,.15)' stroke-width='1' stroke-dasharray='3 4'/>"
        f"<line x1='{cx}' y1='{cy}' x2='{cx}' y2='{cy+160}' stroke='rgba(102,212,200,.15)' stroke-width='1' stroke-dasharray='3 4'/>"
        f"<line x1='{cx}' y1='{cy}' x2='{cx-160}' y2='{cy}' stroke='rgba(102,212,200,.15)' stroke-width='1' stroke-dasharray='3 4'/>"
        # Center
        f"<circle cx='{cx}' cy='{cy}' r='8' fill='#66d4c8' opacity='.9'/>"
        f"<circle cx='{cx}' cy='{cy}' r='3.5' fill='#003366'/>"
        # North indicator tick (larger)
        f"<circle cx='{cx}' cy='{cy-215}' r='5' fill='#66d4c8'/>"
        # Title block at bottom
        f"<rect x='90' y='462' width='320' height='26' fill='rgba(0,51,102,.4)' stroke='rgba(0,128,128,.25)' stroke-width='0.5'/>"
        f"<text x='250' y='473' text-anchor='middle' font-family='Inter,monospace' font-size='7' fill='rgba(102,212,200,.55)' letter-spacing='2.5'>MAWARED TAYBAH CONSULTANCY</text>"
        f"<text x='250' y='483' text-anchor='middle' font-family='Inter,monospace' font-size='6.5' fill='rgba(102,212,200,.35)' letter-spacing='1.5'>AL MADINAH · KSA · EST. 2012</text>"
        f"</svg>"
    )


def _hero_css(root_id):
    return (
        "<style>"
        f"#{root_id}{{position:relative;width:100%;height:100vh;height:100dvh;"
        "background:#003366;overflow:hidden;font-family:Inter,Playfair Display,sans-serif;box-sizing:border-box;}"
        f"#{root_id}::before{{content:'';position:absolute;inset:0;"
        "background-image:linear-gradient(rgba(0,128,128,.05) 1px,transparent 1px),"
        "linear-gradient(90deg,rgba(0,128,128,.05) 1px,transparent 1px);"
        "background-size:48px 48px;pointer-events:none;z-index:0;}}"
        "#hero-inner{display:grid;grid-template-columns:55fr 45fr;height:100%;position:relative;z-index:1;}"
        "#hero-text{display:flex;flex-direction:column;justify-content:center;padding:60px 40px 60px 64px;}"
        "#hero-vis{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}"
        "#hero-vis::before{content:'';position:absolute;inset:0;"
        "background:linear-gradient(90deg,#003366 0%,transparent 35%);z-index:1;pointer-events:none;}"
        "#hero-svg{width:min(85%,380px);height:auto;position:relative;z-index:0;opacity:.85;}"
        "@media(max-width:1024px){"
        "#hero-inner{grid-template-columns:60fr 40fr;}"
        "#hero-text{padding:50px 32px 50px 48px;}"
        "}"
        "@media(max-width:768px){"
        "#hero-inner{grid-template-columns:1fr;}"
        "#hero-vis{display:none;}"
        "#hero-text{padding:50px 24px;}"
        "#hero-text h1{font-size:36px !important;}"
        "#hero-text p{font-size:13px !important;}"
        ".hero-btns{flex-wrap:wrap;}"
        "}"
        "</style>"
    )


def build_hero_html():
    css = _hero_css("hero-root")
    svg = _engineering_svg()
    text = (
        "<div id='hero-text'>"
        "<div style='display:flex;align-items:center;gap:12px;margin-bottom:28px;'>"
        "<span style='font-size:11px;font-weight:700;color:#66d4c8;letter-spacing:2px;text-transform:uppercase;'>Engineering Boards</span>"
        "<div style='width:40px;height:1px;background:#008080;'></div></div>"
        "<div style='display:inline-block;margin-bottom:20px;'>"
        "<span style='font-size:11px;font-weight:700;color:#66d4c8;letter-spacing:2px;"
        "border:1px solid rgba(102,212,200,.3);padding:5px 16px;border-radius:100px;text-transform:uppercase;'>"
        "Established 2012 · Al Madinah, KSA</span></div>"
        "<h1 style='font-family:Playfair Display,serif;font-size:48px;font-weight:900;color:#fff;"
        "line-height:1.15;margin-bottom:20px;letter-spacing:-1px;'>"
        "Mawared Taybah<br><span class='s-accent-text'>Consultancy Office</span></h1>"
        "<p style='font-size:17px;color:rgba(255,255,255,.55);line-height:1.9;max-width:440px;"
        "margin-bottom:16px;font-weight:300;font-style:italic;'>We add value, one project at a time.</p>"
        "<p style='font-size:14px;color:rgba(255,255,255,.4);line-height:1.8;max-width:420px;margin-bottom:40px;'>"
        "Our exceptional quality of work is the norm — delivering innovative, reliable, and client-focused "
        "engineering consultancy solutions across the Middle East and beyond.</p>"
        "<div class='hero-btns' style='display:flex;gap:16px;flex-wrap:wrap;'>"
        "<a href='#services' style='padding:12px 28px;background:linear-gradient(135deg,#008080,#006666);"
        "border-radius:6px;color:#fff;font-size:13px;font-weight:700;text-decoration:none;"
        "display:inline-block;box-shadow:0 4px 16px rgba(0,128,128,.3);'>Explore Services</a>"
        "<a href='#projects' style='padding:12px 28px;border:1px solid rgba(255,255,255,.2);"
        "border-radius:6px;color:rgba(255,255,255,.8);font-size:13px;font-weight:600;"
        "text-decoration:none;display:inline-block;'>View Projects</a>"
        "</div></div>"
    )
    return (
        css
        + f"<div id='hero-root'>"
        + "<div id='hero-inner'>"
        + text
        + f"<div id='hero-vis'>{svg}</div>"
        + "</div>"
        + "<div style='position:absolute;bottom:0;left:0;right:0;height:1px;"
        + "background:linear-gradient(90deg,transparent,rgba(0,128,128,.3),transparent);z-index:2;'></div>"
        + "</div>"
    )


def build_hero_ar_html():
    css = (
        "<style>"
        "#hero-root-ar{position:relative;width:100%;height:100vh;height:100dvh;"
        "background:#003366;overflow:hidden;font-family:Cairo,Arial,sans-serif;box-sizing:border-box;}"
        "#hero-root-ar::before{content:'';position:absolute;inset:0;"
        "background-image:linear-gradient(rgba(0,128,128,.05) 1px,transparent 1px),"
        "linear-gradient(90deg,rgba(0,128,128,.05) 1px,transparent 1px);"
        "background-size:48px 48px;pointer-events:none;z-index:0;}"
        "#hero-inner-ar{display:grid;grid-template-columns:45fr 55fr;height:100%;position:relative;z-index:1;}"
        "#hero-vis-ar{display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}"
        "#hero-vis-ar::before{content:'';position:absolute;inset:0;"
        "background:linear-gradient(270deg,#003366 0%,transparent 35%);z-index:1;pointer-events:none;}"
        "#hero-svg-ar{width:min(85%,380px);height:auto;position:relative;z-index:0;opacity:.85;}"
        "#hero-text-ar{display:flex;flex-direction:column;justify-content:center;"
        "padding:60px 64px 60px 40px;text-align:right;}"
        "@media(max-width:1024px){"
        "#hero-inner-ar{grid-template-columns:40fr 60fr;}"
        "#hero-text-ar{padding:50px 48px 50px 32px;}"
        "}"
        "@media(max-width:768px){"
        "#hero-inner-ar{grid-template-columns:1fr;}"
        "#hero-vis-ar{display:none;}"
        "#hero-text-ar{padding:50px 24px;}"
        "#hero-text-ar h1{font-size:36px !important;}"
        "}"
        "</style>"
    )
    svg = _engineering_svg().replace("id='hero-svg'", "id='hero-svg-ar'")
    text = (
        "<div id='hero-text-ar'>"
        "<div style='display:flex;align-items:center;gap:12px;margin-bottom:28px;justify-content:flex-end;'>"
        "<span style='font-size:11px;font-weight:700;color:#66d4c8;letter-spacing:2px;'>\u0627\u0644\u0645\u062c\u0627\u0644\u0633 \u0627\u0644\u0647\u0646\u062f\u0633\u064a\u0629</span>"
        "<div style='width:40px;height:1px;background:#008080;'></div></div>"
        "<div style='display:inline-block;margin-bottom:20px;'>"
        "<span style='font-size:11px;font-weight:700;color:#66d4c8;letter-spacing:1px;"
        "border:1px solid rgba(102,212,200,.3);padding:5px 16px;border-radius:100px;'>"
        "\u062a\u0623\u0633\u0633\u062a 2012 \u00b7 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629</span></div>"
        "<h1 style='font-size:48px;font-weight:900;color:#fff;line-height:1.25;margin-bottom:20px;'>"
        "\u0645\u0643\u062a\u0628 \u0645\u0648\u0627\u0631\u062f \u0637\u064a\u0628\u0629<br>"
        "<span class='s-accent-text'>\u0644\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a</span></h1>"
        "<p style='font-size:17px;color:rgba(255,255,255,.55);line-height:2;max-width:440px;"
        "margin-bottom:16px;font-weight:300;font-style:italic;margin-right:0;margin-left:auto;'>"
        "\u0646\u064f\u0636\u064a\u0641 \u0642\u064a\u0645\u0629\u060c \u0645\u0634\u0631\u0648\u0639\u0627\u064b \u0628\u0645\u0634\u0631\u0648\u0639.</p>"
        "<p style='font-size:14px;color:rgba(255,255,255,.4);line-height:1.9;max-width:420px;"
        "margin-bottom:40px;margin-right:0;margin-left:auto;'>"
        "\u062c\u0648\u062f\u062a\u0646\u0627 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0641\u064a \u0627\u0644\u0639\u0645\u0644 \u0647\u064a \u0627\u0644\u0645\u0639\u064a\u0627\u0631 \u2014 \u0646\u0642\u062f\u0645 \u062d\u0644\u0648\u0644 \u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0647\u0646\u062f\u0633\u064a\u0629 \u0645\u0628\u062a\u0643\u0631\u0629 \u0648\u0645\u0648\u062b\u0648\u0642\u0629 \u0641\u064a \u062c\u0645\u064a\u0639 \u0623\u0646\u062d\u0627\u0621 \u0627\u0644\u0634\u0631\u0642 \u0627\u0644\u0623\u0648\u0633\u0637.</p>"
        "<div style='display:flex;gap:16px;flex-wrap:wrap;justify-content:flex-end;'>"
        "<a href='#services' style='padding:12px 28px;background:linear-gradient(135deg,#008080,#006666);"
        "border-radius:6px;color:#fff;font-size:13px;font-weight:700;text-decoration:none;"
        "display:inline-block;box-shadow:0 4px 16px rgba(0,128,128,.3);'>"
        "\u0627\u0633\u062a\u0639\u0631\u0636 \u0627\u0644\u062e\u062f\u0645\u0627\u062a</a>"
        "<a href='#projects' style='padding:12px 28px;border:1px solid rgba(255,255,255,.2);"
        "border-radius:6px;color:rgba(255,255,255,.8);font-size:13px;font-weight:600;"
        "text-decoration:none;display:inline-block;'>"
        "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639</a>"
        "</div></div>"
    )
    return (
        css
        + f"<div id='hero-root-ar' dir='rtl'>"
        + "<div id='hero-inner-ar'>"
        + f"<div id='hero-vis-ar'>{svg}</div>"
        + text
        + "</div>"
        + "<div style='position:absolute;bottom:0;left:0;right:0;height:1px;"
        + "background:linear-gradient(90deg,transparent,rgba(0,128,128,.3),transparent);z-index:2;'></div>"
        + "</div>"
    )


CLIENTS_BASE = "https://ssrc.online/wp-content/uploads/2026/04/"
CLIENTS_LOGOS = [
    "raxxal.png", "svs.png", "basic.jpg", "alomeir.png",
    "Basaier.png", "em.png", "azaz.png", "BCI.png",
    "ARM-Associates.png", "Al-Yamama.png", "Tanshia.png", "Khonaini-International.png",
    "Intecsa-Inarsa.png", "PowerChina-SinoHydro.png", "Arabtec.png", "Saudi-Technical-Limited.jpg",
    "Gulf-Consolidated-Contractors.png", "King-Fahd-Causeway-Authority.jpg", "Veolia-ME.png", "Nesma-Partners.png",
    "STC.png", "Saudi-Tharwa.png", "Saudi-Aramco.png", "Public-Investment-Fund.jpg",
]


def _clients_css(root, hdr, wrap, grid):
    return (
        "<style>"
        f"#{root}{{display:flex;flex-direction:column;height:100vh;height:100dvh;"
        "background:#ffffff;overflow:hidden;width:100%;}"
        f"#{hdr}{{text-align:center;padding:36px 64px 16px;flex-shrink:0;}}"
        f"#{wrap}{{flex:1;min-height:0;padding:0 40px 28px;}}"
        f"#{grid}{{display:grid;grid-template-columns:repeat(6,1fr);"
        "grid-auto-rows:1fr;gap:12px;height:100%;}"
        ".cl-card{background:#f8f9fb;border-radius:12px;border:1px solid #e4e8ef;"
        "display:flex;align-items:center;justify-content:center;padding:14px;overflow:hidden;"
        "transition:transform .25s,box-shadow .25s;}"
        ".cl-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,51,102,.1);}"
        ".cl-card img{max-width:100%;max-height:100%;object-fit:contain;"
        "filter:grayscale(30%) opacity(.75);transition:filter .3s;display:block;}"
        ".cl-card:hover img{filter:grayscale(0%) opacity(1);}"
        "@media(max-width:1024px){"
        f"#{grid}{{grid-template-columns:repeat(4,1fr);}}"
        f"#{hdr}{{padding:24px 40px 12px;}}"
        "}"
        "@media(max-width:768px){"
        f"#{grid}{{grid-template-columns:repeat(3,1fr);gap:8px;grid-auto-rows:auto;}}"
        f"#{wrap}{{overflow-y:auto;padding:0 16px 20px;}}"
        f"#{hdr}{{padding:18px 20px 10px;}}"
        f"#{hdr} h2{{font-size:22px !important;}}"
        f"#{hdr} p{{display:none;}}"
        "}"
        "</style>"
    )


def _clients_cards():
    return "".join(
        f"<div class='cl-card'><img src='{CLIENTS_BASE}{logo}' loading='lazy' alt=''></div>"
        for logo in CLIENTS_LOGOS
    )


def build_clients_html():
    css = _clients_css("cl-root", "cl-hdr", "cl-wrap", "cl-grid")
    hdr = (
        "<div id='cl-hdr'>"
        "<span style='display:inline-block;font-size:11px;font-weight:700;color:#008080;"
        "letter-spacing:3px;border:1px solid rgba(0,128,128,.25);padding:6px 20px;"
        "border-radius:100px;text-transform:uppercase;font-family:Inter,sans-serif;'>Trusted By</span>"
        "<h2 style='font-family:Playfair Display,serif;font-size:36px;font-weight:900;color:#003366;"
        "margin:16px 0 10px;line-height:1.3;'>Our <span style=\"color:#008080;\">Clients</span></h2>"
        "<p style='font-size:14px;color:#6b7a8d;max-width:500px;margin:0 auto;line-height:1.85;"
        "font-family:Inter,sans-serif;'>A proud portfolio of clients spanning major Saudi institutions, "
        "global energy leaders, and international contractors.</p>"
        "</div>"
    )
    grid = f"<div id='cl-wrap'><div id='cl-grid'>{_clients_cards()}</div></div>"
    return css + f"<div id='cl-root'>{hdr}{grid}</div>"


def build_clients_ar_html():
    css = _clients_css("cl-root-ar", "cl-hdr-ar", "cl-wrap-ar", "cl-grid-ar")
    hdr = (
        "<div id='cl-hdr-ar' dir='rtl'>"
        "<span style='display:inline-block;font-size:11px;font-weight:700;color:#008080;"
        "letter-spacing:1px;border:1px solid rgba(0,128,128,.25);padding:6px 20px;"
        "border-radius:100px;font-family:Cairo,Arial,sans-serif;'>\u064a\u062b\u0642\u0648\u0646 \u0628\u0646\u0627</span>"
        "<h2 style='font-size:36px;font-weight:900;color:#003366;margin:16px 0 10px;"
        "line-height:1.4;font-family:Cairo,Arial,sans-serif;'>"
        "\u0639\u0645\u0644\u0627\u0624\u0646\u0627 <span style=\"color:#008080;\">\u0627\u0644\u0645\u0645\u064a\u0632\u0648\u0646</span></h2>"
        "<p style='font-size:14px;color:#6b7a8d;max-width:500px;margin:0 auto;line-height:2;"
        "font-family:Cairo,Arial,sans-serif;'>"
        "\u0645\u062d\u0641\u0638\u0629 \u0645\u062a\u0645\u064a\u0632\u0629 \u062a\u0636\u0645 \u0643\u0628\u0631\u0649 \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629 "
        "\u0648\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0648\u0627\u0644\u0645\u0642\u0627\u0648\u0644\u064a\u0646 \u0627\u0644\u062f\u0648\u0644\u064a\u064a\u0646.</p>"
        "</div>"
    )
    grid = f"<div id='cl-wrap-ar'><div id='cl-grid-ar'>{_clients_cards()}</div></div>"
    return css + f"<div id='cl-root-ar' dir='rtl'>{hdr}{grid}</div>"


def _zero_pad():
    return {"unit": "px", "top": "0", "right": "0", "bottom": "0", "left": "0", "isLinked": True}


def update_file(path, hero_html, proj_html, clients_html):
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    for section in data["content"]:
        sid = section.get("id")

        if sid == "hero-sec":
            section["settings"]["padding"] = _zero_pad()
            section["settings"]["margin"] = _zero_pad()
            section["settings"]["height"] = "min-height"
            section["settings"]["min_height"] = {"unit": "vh", "size": 100, "sizes": []}
            section["settings"]["overflow"] = "hidden"
            for col in section.get("elements", []):
                for widget in col.get("elements", []):
                    if widget.get("id") == "hero-w":
                        widget["settings"]["editor"] = hero_html
                        print("  Updated hero-w")

        elif sid == "proj-hdr-sec":
            section["settings"]["padding"] = _zero_pad()
            section["settings"]["margin"] = _zero_pad()
            for col in section.get("elements", []):
                for widget in col.get("elements", []):
                    if widget.get("id") == "proj-hdr-w":
                        widget["settings"]["editor"] = ""
                        print("  Collapsed proj-hdr-w")

        elif sid == "proj-grid-sec":
            section["settings"]["padding"] = _zero_pad()
            section["settings"]["margin"] = _zero_pad()
            section["settings"]["height"] = "min-height"
            section["settings"]["min_height"] = {"unit": "vh", "size": 100, "sizes": []}
            section["settings"]["overflow"] = "hidden"
            section["settings"]["background_background"] = "classic"
            section["settings"]["background_color"] = "#ffffff"
            for col in section.get("elements", []):
                for widget in col.get("elements", []):
                    if widget.get("id") == "proj-grid-w":
                        widget["settings"]["html"] = proj_html
                        print("  Updated proj-grid-w")

        elif sid == "clients-hdr-sec":
            section["settings"]["padding"] = _zero_pad()
            section["settings"]["margin"] = _zero_pad()
            for col in section.get("elements", []):
                for widget in col.get("elements", []):
                    if widget.get("id") == "clients-hdr-w":
                        widget["settings"]["editor"] = ""
                        print("  Collapsed clients-hdr-w")

        elif sid == "clients-grid-sec":
            section["settings"]["padding"] = _zero_pad()
            section["settings"]["margin"] = _zero_pad()
            section["settings"]["height"] = "min-height"
            section["settings"]["min_height"] = {"unit": "vh", "size": 100, "sizes": []}
            section["settings"]["overflow"] = "hidden"
            for col in section.get("elements", []):
                for widget in col.get("elements", []):
                    if widget.get("id") == "clients-grid-w":
                        widget["settings"]["editor"] = clients_html
                        print("  Updated clients-grid-w")

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
    print(f"  Written: {path}")


if __name__ == "__main__":
    base = "C:/Users/Mendoza/OneDrive/Documents/SSRC/ssrc"
    print("Building EN...")
    update_file(f"{base}/engineering-boards-elementor.json", build_hero_html(), build_en_html(), build_clients_html())
    print("Building AR...")
    update_file(f"{base}/engineering-boards-elementor-ar.json", build_hero_ar_html(), build_ar_html(), build_clients_ar_html())
    print("Done.")
