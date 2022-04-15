import React from "react";
import Responsive from "react-responsive";

export const MaxLarge = (props) => (
    <Responsive {...props} maxWidth={1200}/>
);

export const MinMedium = (props) => (
    <Responsive {...props} minWidth={921}/>
);

export const MaxMedium = (props) => (
    <Responsive {...props} maxWidth={920}/>
);

export const Max768 = (props) => (
    <Responsive {...props} maxWidth={768}/>
);
export const Min768 = (props) => (
    <Responsive {...props} minWidth={768}/>
);

export const MinSmall = (props) => (
    <Responsive {...props} minWidth={601}/>
);

export const MaxSmall = (props) => (
    <Responsive {...props} maxWidth={600}/>
);

export const MaxUltraSmall = (props) => (
    <Responsive {...props} maxWidth={400}/>
);

export const MinUltraSmall = (props) => (
    <Responsive {...props} minWidth={400}/>
);

export const MinLarge = (props) => (
    <Responsive {...props} minWidth={120}/>
);