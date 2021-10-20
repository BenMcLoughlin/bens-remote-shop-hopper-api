/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import Link from 'next/link';
import Image from 'next/image';
import { Shop } from '@styled-icons/entypo/Shop';
import { Shopify } from '@styled-icons/fa-brands/Shopify';
import styled, { css } from 'styled-components';

import useGlobal from 'globalState/store';
import { camelCase } from 'utils/strings';
import addShops from "requests/addShops";
import fetchShops from "requests/fetchShops";
import fetchShopStatus from "requests/fetchShopStatus";
import logoSrc from 'public/assets/logos/shophopper-logo.svg';
import { color, sizes, font, mixin, zIndexValues } from 'styles/theme';

const renderLinkItem = (text, iconType, path) => {
    let Icon = iconType;

    return (
        <Link href={path}>
            <LinkItem>
                <>
                    <Icon size={30} />
                    <LinkText>{text}</LinkText>
                </>
            </LinkItem>
        </Link>
    );
};

const ManagerSidebar = ({ set, selected, shopsList, refresh }) => { 
    const [ globalState, globalActions ] = useGlobal();
    const [ list, setList ] = useState([]);
    const [ statuses, setStatuses ] = useState({});
    const [ addShopModal, toggleAddShopModal ] = useState(false);
    const [ loading, setLoading ] = useState(false || "");

    useEffect(() => {
        const _getShopStatus = async () => {
            setLoading(true);
            const eachShop = await fetchShopStatus();

            let businessStatus = {};

            if (eachShop) {
                eachShop.map((d) => (
                    businessStatus[d.business_name] = {
                        products: d.products,
                        updatedAt: d.updated_at
                    }
                ));

                setStatuses(businessStatus);
                setLoading(false);
            }
        };

        _getShopStatus();
    }, [ globalState.status ]);

    useEffect(() => {
        const _getShopList = async () => {
            setLoading(true);
            const uniqueShops = await fetchShops();
            globalActions.shops.addShops(uniqueShops);

            if (uniqueShops) {
                const businessNames = uniqueShops.map((d) => d.business_name);

                setList(businessNames);
                setLoading(false);
            }
        };

        _getShopList();
    }, [ addShopModal ]);

    const _toggleAddShopModal = () => {
        toggleAddShopModal(!addShopModal);
    };

    return (
        <SidebarWrapper>
            <Info>
                <Link href="/">
                    <Logo>
                        <Image src={logoSrc} width={200} height={100} />
                    </Logo>
                </Link>
            </Info>

            {renderLinkItem('Manage Shops', Shop, '/manager')}

            <Divider />

            {renderLinkItem('Shopify', Shopify, '/manager')}

            <Divider />

            {
                loading ?
                    <h3>Loading....</h3>
                    :
                    <React.Fragment>
                        <div className="header">
                            <h4>Available Stores</h4>
                            <h4 className="button" onClick={_toggleAddShopModal}>Add</h4>
                        </div>

                        <Shops>
                            {list.map((businessName) => (
                                <div
                                    key={businessName}
                                    className={`businessName ${ camelCase(businessName) }`}
                                    onClick={() => set.selectedBusinessName(businessName)}
                                >
                                    <div className="title">{businessName}</div>
                                    {statuses[businessName] && // todo: Date format
                                            <UpdateColumn>
                                                <div>Most Recent: <Update>{statuses[businessName]?.products}</Update></div>
                                                <Time>
                                                    <Moment format="MM/DD hh:ssa">{statuses[businessName]?.updatedAt}</Moment>
                                                </Time>
                                            </UpdateColumn>
                                    }
                                </div>
                            ))}
                        </Shops>
                    </React.Fragment>
            }
            <style jsx>{`
                .businessName {
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    justify-content: space-around;
                    gap: 1rem;
                    padding: 2rem;
                    border-radius: 5px;
                    position: relative;
                    cursor: pointer;
                    transition: all 0.7s ease;
                    justify-content: left;
                    background: #f7f7f7;
                }
                .${ camelCase(selected.businessName) } {
                    background: #485056;
                    color: white;
                }
                `}</style>

        </SidebarWrapper>
    );
};

export const SidebarWrapper = styled.div`
    position: fixed;
    z-index: ${ zIndexValues.navLeft - 1 };
    top: 0;
    left: ${ sizes.appNavBarLeftWidth }px;
    width: ${ sizes.secondarySideBarWidth * 2 }px;
    // width: ${ (props) => props.show ? 400 : 20 }px;
    padding: 0 16px 24px;
    background: ${ color.backgroundLightest };
    border-right: 1px solid ${ color.borderLightest };
    ${ mixin.scrollableY }
    ${ mixin.customScrollbar() }
    @media (max-width: 1100px) {
        width: ${ (props) => props.show ? 400 : 20 }px;
        // width: ${ sizes.secondarySideBarWidth - 10 }px;
    }
    @media (max-width: 999px) {
        // display: none;
    }
`;

export const Shops = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
`;

export const Time = styled.div`
    font-size: .8rem;
`;

export const Update = styled.span`
    font-size: .8rem;
    color: green;
`;

export const Row = styled.div`
    display: flex;
    justify-content: start;
    // flex-direction: row;
    text-align: right;
    min-height: 17rem;
    width: 100%;
    gap: 2rem;
`;

export const UpdateColumn = styled.div`
    display: flex;            
    flex-direction: column;
    justify-content: left;
    align-items: center;
    justify-content: space-between;
    background-color: #e7e7e7a6;
    padding: .2rem;
    width: 100%;
`;

export const Logo = styled.div`
    height: 5rem;
    cursor: pointer;
`;

export const Info = styled.div`
    display: flex;
    padding: 24px 4px;
`;

export const Texts = styled.div`
    padding: 3px 0 0 10px;
`;

export const Name = styled.div`
    color: ${ color.textDark };
    ${ font.size(15) };
    ${ font.medium };
`;

export const Category = styled.div`
    color: ${ color.textMedium };
    ${ font.size(13) };
`;

export const Divider = styled.div`
    margin-top: 17px;
    padding-top: 18px;
    border-top: 1px solid ${ color.borderLight };
`;

export const LinkItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    padding: 8px 12px;
    border-radius: 3px;
    cursor: pointer;
    i {
        margin-right: 15px;
        font-size: 20px;
    }
    &.active {
        color: ${ color.primary };
        background: ${ color.backgroundLight };
        i {
        color: ${ color.primary };
        }
    }
`;

export const LinkText = styled.div`
    padding-top: 2px;
    margin-left: 15px;
    ${ font.size(14.7) };
`;

export default ManagerSidebar;