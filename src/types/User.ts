export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geocoordinates;
}

export type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

export type Geocoordinates = {
    lat: string;
    lng: string;
}

