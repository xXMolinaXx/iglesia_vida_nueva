import { FC, ReactElement } from "react";


export interface propsCard {
    title:string,
    extra?:ReactElement,
    style?:any,
    children:ReactElement,
    cover?:ReactElement,
}