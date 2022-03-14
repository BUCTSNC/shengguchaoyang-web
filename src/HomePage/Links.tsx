import React, { useState, useEffect } from "react";
import { groupBy } from "lodash";
import httpUrl from "../utils/httpUrl";
import { BackgroundGrey, DeepPurpleBlue, LightBlue2, LightOrange, StrawBerry, White } from "../ColorCard";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    tabActived: {
        color: White
    },
    tabDisactived: {
        color: "rgba(255,255,255,0.6)"
    },
    tab: {
        backgroundColor: LightBlue2,
        borderRadius: 16,
        fontSize: "1.8rem",
        fontWeight:550,
        textAlign:'center',
        width:'12.5vw',
        margin: "0 4px", padding: "8px 16px"
        // marginTop:'16px'
    },
    tabBox: {
        borderRight: ["solid", "2px", LightBlue2],
        borderLeft: ["solid", "2px", LightBlue2],
        "&:nth-child(1)": {
            borderLeft: ["solid", "2px", "transparent"]
        },
        "&:nth-last-child(1)": {
            borderRight: ["solid", "2px", "transparent"]
        },
        padding:'0 24px'

    },
    linkItem: {
        "&:hover": {
            boxShadow: "16px 16px 30px rgba(0,0,0,0.8)",
            transform: 'translate(-10px, -10px)'
        }
    }
    

});

interface Link { linkType: string, department: string, url: string; }
interface GroupedLinks {
    [groupName: string]: Link[];
}
export default function Links() {
    const colors = [LightOrange, LightBlue2, StrawBerry, DeepPurpleBlue];
    const { tab, tabActived, tabDisactived, tabBox, linkItem } = useStyles();
    const [page, setPage] = useState("");
    const [linkTypes, setLinkTypes] = useState([] as string[]);
    const [groupedLinks, setLinks] = useState({} as GroupedLinks);
    useEffect(() => {
        fetch("/dbs/links.json")
            .then(res => res.json())
            .catch(() => ([]))
            .then(async (links: Link[]) => {
                const grouped_links = groupBy(links, "linkType");
                const link_types = Object.keys(grouped_links);
                setPage(link_types[0]);
                setLinkTypes(link_types);
                setLinks(grouped_links);
            });
    }, []);
    return <div style={{ paddingTop: 16 }}>
        <div style={{backgroundColor:'#F4FFF4',margin:'16px 0'}}>
        <div style={{ width: "100%", textAlign: "center", fontWeight:550,letterSpacing:'2rem',fontSize: "2.5rem", marginBottom: 16 }}><i>校内网站导航</i></div>
        <hr style={{ color: LightOrange, margin: 0 }} />
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 4, // backgroundColor: White
            marginTop:16
        }}>
            {linkTypes.map(linkType => {
                return <div key={linkType} className={tabBox}><div
                    onClick={() => setPage(linkType)}
                    className={`${page === linkType ? tabActived : tabDisactived} ${tab}`}>
                    {linkType}
                </div></div>;
            })}
        </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{
            textAlign: "center",
            display: "grid", gridTemplateColumns: "repeat(4, 25%)",
            width: "90%"
        }}>
            {groupedLinks[page]?.map((link, index) => {
                const offset = Boolean(Math.floor((index) / 4) % 2);
                
                return <div key={link.department}>
                    <div
                        // className='links'
                        className={linkItem}
                        style={{ 
                            color: White, backgroundColor: colors[Math.floor(Math.random() * 4)],
                            marginTop: "16px",
                            cursor: "pointer",
                            fontSize: "1rem",
                            padding: 8,
                            height: 48, width: "60%", marginLeft: offset ? "40%" : "0",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "10px 10px 16px rgba(0,0,0,0.4)"
                        }}
                        onClick={() => window.open(httpUrl(link.url))}
                        color="#69c0ff"
                    >
                        {link   .department}
                    </div>
                </div>;
            })}
        </div>
        </div>
    </div>;
}
