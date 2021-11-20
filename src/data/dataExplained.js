{
    // Todos los coches tienen una
    "model" =  "string", 
    // Se define en el typo de coche
    "brand" = "enumType<seat | renault | wolksvagen | ford>", 
    // Se define en el tipo de categoria
    "category" = "enumType<normal | rare | legendary>", 
    // Todos los coches tienen una
    "type" = "enumType<diesel | gasoline | electric | hybrid>",
    // Todos los coches tienen una
    "color" = "string",
    // Todos los coches tienen una
    "passengers" = "number",
    // Todos los coches tienen una
    "year" = "number",
    // Todos los coches tienen una
    "price" = "number",
    // Todos los coches tienen una
    "avaialble" = "boolean",
    // Todos los coches tienen una
    "characteristics" = [
        "<'tinted crystals' | 'sportive' | 'compact' | 'large' | 'low consumption' | 'radio cassete' | 'navigation assistant' | 'heated seats' | 'big trunk' | 'familiar' | 'accomodation' | 'convertible' | 'sunroof'>"
    ]
}