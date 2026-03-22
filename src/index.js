import ImageUploader from './ImageUploader.vue'

window.__EluthPlugins = window.__EluthPlugins || {}
window.__EluthPlugins['image-uploader'] = {
    component: ImageUploader,
    zones: ['input'],
}
