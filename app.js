const url = 'https://localhost.ru/learn/javascript'

function getUrlParts(url) {
    const [protocol, _, domen, ...path] = url.split('/')
    console.log(`Protocol: ${protocol.split(':')[0]}`)
    console.log(`Domen: ${domen}`)
    console.log(`Path: /${path.join('/')}`)
}

getUrlParts(url)