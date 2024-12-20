'use server'

import React from 'react';


import { List } from './nft.list'
import Cards from './nft.cards';

import AdminAction from '../../components/action';
import { AdminType } from '../../types';
import { AccountProvider, Connect } from './nft.connect';
import { Trialminted } from './nft.trialminted';
import { Ownership } from './nft.ownership';
import { Detail } from './nft.detail';
import { Mint } from './nft.mint';
import { Show } from './nft.show';



async function Nft(admin: AdminType) {

    return (
        <AccountProvider>
        <AdminAction admin={admin} actions={Data.actions} />
        </AccountProvider>
    );
};


const Data = {
    actions: ["list", "detail", "show"],
    icon: "nft",
    name: "NFT",
};


Nft.Data = Data;
Nft.Detail = Detail;
Nft.List = List;
Nft.Cards = Cards;
Nft.Connect = Connect;
Nft.Ownership = Ownership;
Nft.Mint = Mint;
Nft.Trialminted = Trialminted;
Nft.Show = Show;

export default Nft;