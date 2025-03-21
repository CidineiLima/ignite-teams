import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme} from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
width: 56px;
height: 56px;
justify-content: center;
align-items: center;
margin-left: 12;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type } : { theme: DefaultTheme; type: ButtonTypeStyleProps }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
    }))``;


