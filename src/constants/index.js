
export const ORIGIN_FILE_NAME = 'origin'
export const EDITED_FILE_NAME = 'edited'
export const DEFAULT_SHADOW_COLOR = "#000000"
export const DEFAULT_CANVAS_BACKGROUND_COLOR = "#ffffff"
export const PNG_FILE_EXT = "png"
export const IMAGES_FOLDER_NAME = "images.zip"
export const PREVIEW_IMAGE_ALT = "preview image"

export const SCALE_MIN_VALUE = "0.2"
export const SCALE_MAX_VALUE = "3"
export const SCALE_STEP = "0.1"

export const QUALITY_MIN_VALUE = "0"
export const QUALITY_MAX_VALUE = "1"
export const QUALITY_STEP = "0.01"

export const BLUR_MIN_VALUE = "0"
export const BLUR_MAX_VALUE = "100"
export const BLUR_STEP = "1"

export const SEPIA_MIN_VALUE = "0"
export const SEPIA_MAX_VALUE = "100"
export const SEPIA_STEP = "1"

export const BRIGHTNESS_MIN_VALUE = "0"
export const BRIGHTNESS_MAX_VALUE = "100"
export const BRIGHTNESS_STEP = "1"

export const FILE_PATH_LABEL = 'path'
export const DEBOUNCE_DELAY = 300

export const options = [
    {value: 'image/png', label: 'png'},
    {value: 'image/jpeg', label: 'jpeg'},
    {value: 'image/webp', label: 'webp'},
    {value: 'image/avif', label: 'avif'},
]

export const settingsObj = {
    scale: 1,
    quality: 1,
    blur: 0,
    sepia: 0,
    brightness: 100,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    shadowWidth: 0,
    shadowHeight: 0,
    shadowBlur: 0,
}

export const paddingControlsArray = [
    {
        name: "paddingTop",
        label: "Padding Top",
    },
    {
        name: "paddingBottom",
        label: "Padding Bottom"
    },
    {
        name: "paddingLeft",
        label: "Padding Left"
    },
    {
        name: "paddingRight",
        label: "Padding Right"
    },
]

export const shadowControlsArray = [
    {
        name: "shadowWidth",
        label: "Shadow width",
    },
    {
        name: "shadowHeight",
        label: "Shadow height"
    },
    {
        name: "shadowBlur",
        label: "Shadow blur"
    },
]