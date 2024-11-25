import { Church, FellowshipCenter, Pastor } from '../types';

export const samplePastors: Pastor[] = [
  {
    id: '1',
    name: 'Olufunke Okoya',
    phone: '07036581322',
    email: 'olufunkeokoya@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '2',
    name: 'Jumoke Ebaita',
    phone: '07031858606',
    email: 'jummyekdy@yahoo.com',
    fellowshipCenters: [],
  },
  {
    id: '3',
    name: 'Joseph Olajoseph',
    phone: '08077415042',
    email: 'olaoluwa.olajoseph@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '4',
    name: 'Emem Asuquo',
    phone: '09031551554',
    email: 'ememasuquo.ene@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '5',
    name: 'Muyowa Ogunleye',
    phone: '08039151991',
    email: '',
    fellowshipCenters: [],
  },
  {
    id: '6',
    name: 'Adejoh Akeji',
    phone: '08148753908',
    email: 'adejoh6@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '7',
    name: 'Olufunmilayo Alimi',
    phone: '07065963524',
    email: 'funmilayoalimi.s@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '8',
    name: 'Bunmi Adams',
    phone: '08066598474',
    email: 'olubunmiadams@godschamber.org.ng',
    fellowshipCenters: [],
  },
  {
    id: '9',
    name: 'Sarah Egbe',
    phone: '07036998376',
    email: 'sarahegbe090@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '10',
    name: 'Adekunle Adenike',
    phone: '08062135521',
    email: 'nikeagoi@yahoo.com',
    fellowshipCenters: [],
  },
  {
    id: '11',
    name: 'Nkechi Oyelami',
    phone: '08167706501',
    email: 'ireneoyelami@gmail.com',
    fellowshipCenters: [],
  },
  {
    id: '12',
    name: 'Shile Adeoye',
    phone: '07030316211',
    email: '',
    fellowshipCenters: [],
  },
  {
    id: '13',
    name: 'Funmi Alomaja',
    phone: '08034563329',
    email: '',
    fellowshipCenters: [],
  },
  {
    id: '14',
    name: 'Olufemi Aregbesola',
    phone: '07062940755',
    email: 'phemiaregbs@yahoo.com',
    fellowshipCenters: [],
  },
];

export const sampleFellowshipCenters: FellowshipCenter[] = [
  {
    id: '1',
    name: 'HouseHold of God Fellowship',
    pastor: samplePastors[0],
    location: {
      lat: 6.6273,
      lng: 3.3414,
      address: '17, Oshinyemi Street, Off Abeokuta Street, off Yaya Abatan, Ogba, Lagos',
    },
    whatsappGroup: 'https://chat.whatsapp.com/FYXgYXUIpC97gP7ZvM5eqv',
    church: {} as Church,
    members: [],
  },
  {
    id: '2',
    name: 'House of Safety Fellowship',
    pastor: samplePastors[1],
    location: {
      lat: 6.6018,
      lng: 3.3515,
      address: 'No 18, Ajayi road. Opp God\'s chamber church, Oke-Ira',
    },
    whatsappGroup: 'https://chat.whatsapp.com/KkRsOzj5oAl9ZPU5dqG4V7',
    church: {} as Church,
    members: [],
  },
  {
    id: '3',
    name: 'God\'s Praise Family Fellowship',
    pastor: samplePastors[2],
    location: {
      lat: 6.4698,
      lng: 3.3882,
      address: '67, Ajayi Road, Ogba. Opposite Ondo Street junction',
    },
    whatsappGroup: 'https://chat.whatsapp.com/LsSQHQCuIkSC81MQUApqKS',
    church: {} as Church,
    members: [],
  },
  {
    id: '4',
    name: 'House of Blessings Fellowship',
    pastor: samplePastors[3],
    location: {
      lat: 6.6273,
      lng: 3.3414,
      address: '14, Ologun street, community, Oker Ira Aguda Ogba',
    },
    whatsappGroup: 'https://chat.whatsapp.com/FGA6f5XfhhHBPxJAzOOeeE',
    church: {} as Church,
    members: [],
  },
  {
    id: '5',
    name: 'Goshen Centre Fellowship',
    pastor: samplePastors[4],
    location: {
      lat: 6.6018,
      lng: 3.3515,
      address: 'Irepodun Area, Ogba',
    },
    whatsappGroup: '',
    church: {} as Church,
    members: [],
  },
  {
    id: '6',
    name: 'House of Revelation Fellowship',
    pastor: samplePastors[5],
    location: {
      lat: 6.4698,
      lng: 3.3882,
      address: '84 Oyemekun Street Ogba',
    },
    whatsappGroup: 'https://chat.whatsapp.com/BZjrGxu9PUDH9v3IXZAdbL',
    church: {} as Church,
    members: [],
  },
  {
    id: '7',
    name: 'Holy House Fellowship',
    pastor: samplePastors[6],
    location: {
      lat: 6.6273,
      lng: 3.3414,
      address: 'Online/Virtual',
    },
    whatsappGroup: 'https://chat.whatsapp.com/Kgvg42BtZpj1eR6Zz53m2R',
    church: {} as Church,
    members: [],
  },
  {
    id: '8',
    name: 'Faith House Fellowship',
    pastor: samplePastors[7],
    location: {
      lat: 6.6018,
      lng: 3.3515,
      address: '24 Morgan Street, Ojodu Berger',
    },
    whatsappGroup: 'https://chat.whatsapp.com/EAwIau7vatZ3VdfLwrxBdT',
    church: {} as Church,
    members: [],
  },
  {
    id: '9',
    name: 'House of Wisdom Fellowship',
    pastor: samplePastors[8],
    location: {
      lat: 6.4698,
      lng: 3.3882,
      address: '52 Adedoyin street, aguda ogba',
    },
    whatsappGroup: '',
    church: {} as Church,
    members: [],
  },
  {
    id: '10',
    name: 'Berean City Fellowship',
    pastor: samplePastors[9],
    location: {
      lat: 6.6273,
      lng: 3.3414,
      address: '82, Emmanuel high street, Ojota - Lagos',
    },
    whatsappGroup: '',
    church: {} as Church,
    members: [],
  },
  {
    id: '11',
    name: 'Restoration Center Fellowship',
    pastor: samplePastors[10],
    location: {
      lat: 6.6018,
      lng: 3.3515,
      address: 'Block 13,unit 1, Pencity court, iju road, agege',
    },
    whatsappGroup: 'https://chat.whatsapp.com/CqRwfaWGpox8q6V5DMbCmU',
    church: {} as Church,
    members: [],
  },
  {
    id: '12',
    name: 'Alagbole Fellowship',
    pastor: samplePastors[11],
    location: {
      lat: 6.4698,
      lng: 3.3882,
      address: 'Alagbole',
    },
    whatsappGroup: '',
    church: {} as Church,
    members: [],
  },
  {
    id: '13',
    name: 'Akute Ajuwon Fellowship',
    pastor: samplePastors[12],
    location: {
      lat: 6.6273,
      lng: 3.3414,
      address: 'Akute Ajuwon',
    },
    whatsappGroup: '',
    church: {} as Church,
    members: [],
  },
  {
    id: '14',
    name: 'The Blessed Family Fellowship',
    pastor: samplePastors[13],
    location: {
      lat: 6.6018,
      lng: 3.3515,
      address: '7 Aina Street Unity Estate, Iju Ishaga',
    },
    whatsappGroup: 'https://chat.whatsapp.com/DTerW6cDOWnFWZzYCLqDMR',
    church: {} as Church,
    members: [],
  },
];