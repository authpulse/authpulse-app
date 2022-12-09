interface Config {
    BASE_URL: string
}

const config: Config = {
    BASE_URL: process.env.REACT_APP_BASE_URL as string,
}

export default config

const concatenateURL = (url: string): string => {
    return `${config.BASE_URL}${url}`
}

export {
    concatenateURL
}
