const promotionGridSchema = {
  title: "Grilla Custom",
  type: "object",
  properties: {
    typeScreen: {
      title: "Tipo de pantalla",
      type: "string",
      enum: ["desktop", "mobile"]
    },
    products: {
      title: "Productos",
      type: "array",
      items: {
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            cta: {
                type: "string"
            },
            image: {
              widget: {
                'ui:widget': 'image-uploader',
              },
              type: "string"
            }
        }
      }
    }
  },
  dependencies: {
    typeScreen: {
      "oneOf": [
        {
          properties: {
            typeScreen: {
              enum: ["desktop"]
            },
            gridType: {
              title: "Orden",
              enum: [
                1,
                2,
                3,
                4
              ],
              type: "number"
            }
          }
        },
        {
          properties: {
            typeScreen: {
              enum: ["mobile"]
            },
            gridType: {
              title: "Orden",
              enum: [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              type: "number"
            }
          }
        }
      ]
    }
  }
}

export default promotionGridSchema
