import { defineField } from "sanity";

export const product = {
    name: 'product',
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "price",
            title: "Price",
            type: "string"
        },
        {
            name: "care",
            title: "Product Care",
            type: "string"
        },
        {
            name: "image",
            title: "Product Image",
            type: "image"
        }
        ,
        defineField
            ({
                name: "category",
                title: "Product Category",
                type: "reference",
                to: [{ type: "category" }]
            })
    ]
}