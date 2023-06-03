// defining schema for banner
export const banner = {
    name: "banner",
    type: "document",
    title: "banner",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "sale",
            title: "Sale",
            type: "string"
        },
        {
            name: 'image',
            type: 'array',
            title: 'Image',
            of: [
                {
                    type: 'image',
                    fields: [
                        {
                            name: "alt",
                            type: "text",
                            title: "Alternative text",
                        }
                    ]
                }
            ]
        },
    ]
}
