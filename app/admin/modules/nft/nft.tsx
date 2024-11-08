'use server'

import React from 'react';


import { List } from './nft.list'
import Cards from './nft.cards';
import { Formular } from './nft.formular';

import AdminAction from '../../components/action';
import { AdminType } from '../../types';
import { Connect } from './nft.connect';
import { Trialminted } from './nft.trialminted';
import { Ownership } from './nft.ownership';
import { Detail } from './nft.detail';
import { Mint } from './nft.mint';
import { Import } from './nft.import';



async function Nft(admin: AdminType) {

    return (
        <AdminAction admin={admin} actions={Data.actions} />
    );
};


const Data = {
    actions: ["list", "detail", "import"],
    icon: "nft",
    name: "NFT",
};


Nft.Data = Data;
Nft.Detail = Detail;
Nft.List = List;
Nft.Cards = Cards;
Nft.Formular = Formular;
Nft.Connect = Connect;
Nft.Ownership = Ownership;
Nft.Mint = Mint;
Nft.Trialminted = Trialminted;
Nft.Import = Import;

export default Nft;