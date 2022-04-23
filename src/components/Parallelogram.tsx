import React from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type DIVProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

/**
 *
 * @param props 该组件传递四个参数：
 * outerProps：给外部的平行四边形DIV的参数
 * innerProps：给内部矩形的DIV的参数
 * angle：向右倾斜的角度，number类型，可以为负值
 * children：子元素
 * @returns
 */
export default function Parallelogram(props: {
    outerProps?: DIVProps;
    innerProps?: DIVProps;
    angle: number;
    children?: JSX.Element | JSX.Element[] | string | null;
}) {
    return (
        <div
            {...{
                ...props.outerProps,
                style: {
                    ...props.outerProps?.style,
                    transform: `skew(${-props.angle}deg, 0)`,
                },
            }}
        >
            <div
                {...{
                    ...props.innerProps,
                    style: {
                        ...props.innerProps?.style,
                        transform: `skew(${props.angle}deg, 0)`,
                    },
                }}
            >
                {props.children}
            </div>
        </div>
    );
}
