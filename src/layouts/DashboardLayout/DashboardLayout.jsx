import {VStack} from '@chakra-ui/react';

import { Outlet} from 'react-router-dom';
import TopNav from '../../components/TopNav/TopNav';

export default function DashboardLayout(){
    return(
        <VStack>
            <TopNav />
            <Outlet />
        </VStack>
    )
}