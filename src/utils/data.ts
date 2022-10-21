export const userQuery = (userId: string) => {
    return `*[_type == "user" && _id == '${userId}']`;
};

const fetchPinData = `{
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        avatar
    },
    save[] {
        _key,
        postedBy -> {
            _id,
            userName,
            avatar
        }
    }
}`;

export const searchQuery = (search: string) => {
    return `*[_type == "pin" && title match '${search}*' || category match '${search}*' || about match '${search}*' ${fetchPinData}]`;
};

export const feedQuery = `
    *[_type == 'pin' | order(_createAd desc)${fetchPinData}]
`;