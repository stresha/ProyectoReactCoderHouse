export const createAdaptedCategory = (doc) => {
    const data = doc.data()

    const formattedCategory = {
        id: doc.id,
        description: data.description,
        order: data.order
    }

    return formattedCategory
}