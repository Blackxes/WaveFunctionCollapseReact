/**
 * @File File Content
 *
 * @Author Alexander Bassov Mon Oct 03 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import styled from "styled-components";

export interface ListingItemProps {}

export const ListingItem: React.FunctionComponent<ListingItemProps> = (
    props
) => <SListingItem {...props} />;

const SListingItem = styled.li`
    margin-bottom: 20px;
`;
