import { groupBy } from "lodash";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { White } from "../ColorCard";
import httpUrl from "../utils/httpUrl";
import "./homePage.css";

const useStyles = createUseStyles({
    tabActived: {
        color: White,
        backgroundColor: "rgba(33,137,227,1)",
    },
    tabDisactived: {
        color: "rgba(255,255,255,0.4)",
        backgroundColor: "rgba(33,137,227,0.7)",
    },
});

interface Link {
    linkType: string;
    department: string;
    url: string;
}
interface GroupedLinks {
    [groupName: string]: Link[];
}
export default function Links() {
    const { tabActived, tabDisactived } = useStyles();
    const [page, setPage] = useState("");
    const [linkTypes, setLinkTypes] = useState([] as string[]);
    const [groupedLinks, setLinks] = useState({} as GroupedLinks);
    const tab = " tab";
    useEffect(() => {
        fetch("/dbs/links.json")
            .then((res) => res.json())
            .catch(() => [])
            .then(async (links: Link[]) => {
                const grouped_links = groupBy(links, "linkType");
                const link_types = Object.keys(grouped_links);
                setPage(link_types[0]);
                setLinkTypes(link_types);
                setLinks(grouped_links);
            });
    }, []);
    return (
        <div style={{ paddingTop: 24 }}>
            <div>
                <div className="indexTitle">校内网站导航</div>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "stretch",
                        marginTop: 0,
                    }}
                >
                    {linkTypes.map((linkType) => {
                        return (
                            <div key={linkType} className="tabBox">
                                <div
                                    onClick={() => setPage(linkType)}
                                    className={`${
                                        page === linkType
                                            ? tabActived
                                            : tabDisactived
                                    }${tab}`}
                                >
                                    {linkType}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div className="linksMap">
                    {groupedLinks[page]?.map((link) => {
                        return (
                            <div key={link.department}>
                                <div
                                    className="linkItem"
                                    onClick={() =>
                                        window.open(httpUrl(link.url))
                                    }
                                    color="#69c0ff"
                                >
                                    {link.department}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
