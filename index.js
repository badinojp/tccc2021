const crud = function () {

    let items = [
        {id: 1, name: "John", lastname: "Doe"},
        {id: 2, name: "Jane", lastname: "Doe"},
    ]

    let autoincrement = 3

    return {
        create: (name, lastname) => {
            newItem = {id: Number(), name: '', lastname: ''}
            if (items.length !== 0) {
                newItem.id = items[items.length-1].id + 1;
            } else {
                newItem.id = 1;
            }
            newItem.name = name;
            newItem.lastname = lastname;
            items.push(newItem);
            return newItem;
        },
        read: (id) => {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == id) {
                    return items[i];
                } else {
                    return null;
                }
            }
        },
        update: (id, name, lastname) => {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == id) {
                    items[i].name = name;
                    items[i].lastname = lastname;
                    return items[i]
                } else {
                    return false
                }
            }
        },
        delete: (id) => {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == id) {
                    delete items[i]
                    return true
                } else {
                    return false
                }
            }
        }
    }

}

module.exports = crud()
