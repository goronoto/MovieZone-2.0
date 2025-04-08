import Layout from "../components/Layout";
import Search from "../components/Search"; 
import { motion } from "framer-motion";


export default function SearchPage(){
    return(
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -50 }} 
                transition={{ duration: 0.5 }}
            >
                <Layout children={<Search/>}>
                    
                </Layout>
            </motion.div>
        </>
    )
}