import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "pe1h4t8n",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skz1qlWp2l8MNxOr2khSgJOrl2oAmKS1dMK9ju5oFNgYkoSRbW4FNnUGzhc3eD3yeQx7ykbwow0QmzdHPEsA4Hmif08tA7VGDiXBeEDAtcDOPF7gJt257poTuv66GYCRzmNRngdxkCcoxjPFObNsy88PQoGaI43r8dxjnYJuoUoqSsDfqYgH"
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);