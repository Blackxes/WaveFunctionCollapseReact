/**
 * @File Compared to the Flex component this component provides basic spacing
 * 	without the need to configure anything
 *
 * @Author Alexander Bassov Mon Oct 03 2022
 * @Email blackxes.dev@gmail.com
 */

import * as React from "react";

import { Flex, FlexProps } from "./Flex";

import { ListingItem } from "./ListingItem";
import styled from "styled-components";

interface ListingProps extends FlexProps {}

export const Listing: React.FunctionComponent<ListingProps> = ({
    children,
    ...rest
}) => (
    // Convert children into an array if not and wrap with the listing item wrapper
    <SListing {...rest} children={children} wrapComponent={ListingItem} />
);

const SListing = styled(Flex)`
    display: flex;
    flex-direction: column;
`;
