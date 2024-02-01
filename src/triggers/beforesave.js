import _ from 'underscore'
import * as PublishableUtils from "../lib/index.js"

export default async (props) => {
  const { request } = props
  const { object, } = request

  if (!object.get('publishableStatus')) {
    object.set('publishableStatus', 'draft')
    return
  }

  const dirtyKeys = object.dirtyKeys()
  if (!dirtyKeys || !dirtyKeys.length) {
    return
  }

  PublishableUtils.updatePublication({ item: object })
  if (_.intersection(['publishableStatus'], dirtyKeys).length > 0) {

  }
}
