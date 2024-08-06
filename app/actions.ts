'use server'


export async function reportWebsite(formData: FormData) {
    let siteUrl = formData.get('url');
    // @ts-ignore
    siteUrl = siteUrl.replace(/^https?:\/\//, '')

    const whois = require('whois-json');

    const results = await whois(siteUrl, {follow: 3, verbose: true});
    console.log(results[0]["data"]["registrarAbuseContactEmail"])



}