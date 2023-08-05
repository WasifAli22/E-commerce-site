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
            type : "number",
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
        },
        defineField(
            {
                title: 'Slug',
                name: 'slug',
                type: 'slug',
                options: {
                  source: 'title',
                  maxLength: 100,
                }
            }
        ),
        defineField
            ({
                name: "category",
                title: "Product Category",
                type: "reference",
                to: [{ type: "category" }]
            })
    ]
}