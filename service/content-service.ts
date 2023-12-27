import { gql } from "@apollo/client";
import createApolloClient from "./apollo-client";


export async function getAllPostsPaginated(limit: number, skip: number) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetAllPostsPaginated($limit: Int, $skip: Int) {
  blogPostCollection(order: [publishDate_DESC], limit: $limit, skip: $skip) {
    items {
      title
      publishDate
      cardImage {
        url
      }
      author {
        ... on Author {
          name
          authorHeadshot {
            url
          }
        }
      }
      sys {
        id
      }
    }
  }
}
        `,
        variables: {
            "limit": limit,
            "skip": skip
        }
    });
    // console.log(data.blogPostCollection.items);

    return data.blogPostCollection.items;
}

export async function getTaggedPosts(tag: string) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetTaggedPosts($inputTag: [String]) {
  blogPostCollection(where: {
    tags_contains_all: $inputTag
  }, order: [publishDate_DESC]) {
    items {
      title
      publishDate
      cardImage {
        url
      }
      author {
        ... on Author {
          name
          authorHeadshot {
            url
          }
        }
      }
      sys {
        id
      }
    }
  }
}
        `,
        variables: {
            "inputTag": tag
        }
    });

    return data.blogPostCollection.items;
}

export async function getPostData(postId: string) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetPostData($id: String!) {
  blogPost(id: $id) {
    title
    tags
    author {
        ... on Author {
          name
          authorHeadshot {
            url
          }
          sys {
            id
          }
        }
      }
    publishDate
    content {
      json
      links {
        assets {
          block {
            url
            sys {
              id
            }
            contentfulMetadata {
              tags {
                name
              }
            }
          }
        }
      }
    }
  }
}
        `,
        variables: {
            "id": postId
        }
    });

    return data.blogPost;
}

export async function getAuthorData(authorId: string) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetAuthorData($id: String!) {
  author(id: $id) {
    name
    bio {
      json
    }
    authorHeadshot {
      url
    }
  }
}
        `,
        variables: {
            "id": authorId
        }
    });

    return data.author;
}

export async function getAuthorPosts(authorId: string) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetAuthorPosts($authorId: String!) {
  author(id: $authorId) {
    linkedFrom {
      entryCollection(limit: 3) {
        items {
          ... on BlogPost {
            title
            publishDate
            cardImage {
              url
            }
            author {
              ... on Author {
                name
                authorHeadshot {
                  url
                }
              }
            }
            sys {
              id
            }
          }
        }
      }
    }
  }
}
        `,
        variables: {
            "authorId": authorId
        }
    });
    // console.log(data.author.linkedFrom.entryCollection.items);

    return data.author.linkedFrom.entryCollection.items;
}

export async function getAsset(assetId: string) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetAsset($id: String!) {
  asset(id: $id) {
    fileName
    url
  }
}
        `,
        variables: {
            "id": assetId
        }
    });

    return data.asset;
}

export async function getFeaturedPosts() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetFeaturedPosts {
  blogPostCollection(where: {
    contentfulMetadata: {
      tags: {
        id_contains_all: ["featured"]
      }
    }
  }, limit: 3) {
    items {
      title
      publishDate
      cardImage {
        url
      }
      author {
        ... on Author {
          name
          authorHeadshot {
            url
          }
        }
      }
      sys {
        id
      }
    }
  }
}
        `,
    });

    return data.blogPostCollection.items;
}

export async function getRecentVideoPosts() {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query GetFeaturedPosts {
  blogPostCollection(where: {
    contentfulMetadata: {
      tags: {
        id_contains_all: ["video"]
      }
    }
  }, limit: 3) {
    items {
      title
      publishDate
      cardImage {
        url
      }
      author {
        ... on Author {
          name
          authorHeadshot {
            url
          }
        }
      }
      sys {
        id
      }
    }
  }
}
        `,
    });

    return data.blogPostCollection.items;
}

export async function getPageNums(currentPage: number) {
    const client = createApolloClient();
    const { data } = await client.query({
        query: gql`
            query {
  blogPostCollection {
    total
  }
}
        `,
    });
    
    var numPages = ((data.blogPostCollection.total - 4) / 3) + 1;
    if (data.blogPostCollection.total <= 4) {
        numPages = 1;
    }

    if (numPages < currentPage || currentPage < 1) {
        return [];
    }

    var pageNums: number[] = [];
    if (currentPage > 2) {
        pageNums.push(currentPage - 2);
    }
    if (currentPage > 1) {
        pageNums.push(currentPage - 1);
    }
    pageNums.push(currentPage);
    if (numPages - currentPage > 0) {
        pageNums.push(currentPage + 1);
    }
    if (numPages - currentPage > 1) {
        pageNums.push(currentPage + 2);
    }

    return pageNums;

}