import { loopObject } from "./loopObject.js"

export function connectScope(modules, practice) {
  function bindScope(module) {
    let withScope = { ...module }
    loopObject(module, (key, it) => {
      if (it.isAFunction) withScope = { ...withScope, [key]: module[key].bind(this) }
      if (it.isAnObject) withScope = { ...withScope, [key]: this.bindScope(withScope[key]) }
    })
    return withScope
  }

  this.bindScope = bindScope.bind(this)

  for (const moduleKey in modules) {
    this[moduleKey] = this.bindScope(modules[moduleKey])
  }
}
