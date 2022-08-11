const RouteView = {
  name: 'RouteView',
  props: {
    keepAlive: {
      type: Boolean,
      default: false
    }
  },
  render () {
    const { $route: { meta } } = this
    const inKeep = (
      <keep-alive>
        <router-view />
      </keep-alive>
    )
    const notKeep = (
      <router-view />
    )
    return this.keepAlive || meta.keepAlive ? inKeep : notKeep
  }
}

export default RouteView
