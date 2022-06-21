const promotionGridSchema = {
  title: "Grilla Custom",
  type: "object",
  properties: {
    typeScreen: {
      title: "Tipo de pantalla",
      type: "string",
      enum: ["desktop", "mobile"]
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
