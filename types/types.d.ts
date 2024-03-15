type Images = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type Posts = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
