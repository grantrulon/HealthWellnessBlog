import { Document } from "@contentful/rich-text-types";

export interface PostCardData {
    sys: {
        id: string,
    },
    title: string,
    cardImage: {
        url: string
    }
    publishDate: string,
    author: {
        name: string,
        authorHeadshot: {
            url: string
        }
    }
}

export interface PostData {
    sys: {
        id: string,
    },
    title: string,
    author: {
        name: string,
        authorHeadshot: {
            url: string
        },
        sys: {
            id: string
        }
    }
    publishDate: string,
    tags: [String],
    content: {
        json: Document
        links: {
            assets: {
                block: [
                    {
                      sys: {
                        id: string
                      },
                      url: string,
                      contentfulMetadata: {
                        tags: [{
                          name: string
                        }]
                      }
                    }
                  ]
            }
        }
    }

}
