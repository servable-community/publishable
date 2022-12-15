import _ from 'underscore'

export const beforeSave = async (request) => {
    const { object, } = request

    if (!object.get('publishableStatus')) {
        object.set('publishableStatus', 'draft')
        return
    }

    const dirtyKeys = object.dirtyKeys()
    if (!dirtyKeys || !dirtyKeys.length) {
        return
    }

    object.publishableUpdatePublication()
    if (_.intersection(['publishableStatus'], dirtyKeys).length > 0) {

    }
}