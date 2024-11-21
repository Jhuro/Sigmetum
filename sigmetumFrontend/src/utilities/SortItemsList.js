export const SortItemsList = (itemsList) => {
    const sortedItemsList = itemsList.sort((a, b) => {
        const isANumeric = !isNaN(a);
        const isBNumeric = !isNaN(b);
        if (!isANumeric && !isBNumeric) {
          return a.localeCompare(b, undefined, { sensitivity: "base" });
        } else if (!isANumeric) {
          return -1;
        } else if (!isBNumeric) {
          return 1;
        } else {
          return a - b;
        }
      })

    return sortedItemsList;
}