import React, { useEffect } from "react";
import TopBar from "../../common/layout/topbar";
import { HashRouter } from "react-router-dom";
import { lastIndexOf, substr } from "@7urtle/lambda";
import Router from "../../Router";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { set_userData, set_roles } from "../../redux/dispatch/dispatch";
import { listGroups } from "../../services/Users";
import { getCurrentUserRole } from "../../services/user"
import { singleUser } from "../../services/DBUser";


function Dashboard(props) {
    useEffect(() => {
        let temp = props.userdata
        getCurrentUserRole().then(res => temp["role"] = res)
        singleUser(props.userdata.sub).then(res => temp["companyID"] = res.data.getUser.companyID)
        props.set_userData(temp)


        listGroups(10).then((res) => {
            temp = []
            res.Groups.forEach(element => {
                temp.push(element.GroupName)
            })

            props.set_roles(temp)
        })
    }, [])

    const getBasename = path => substr(lastIndexOf("/")(path))(0)(path);

    return (
        <Box>
            <HashRouter basename={getBasename(window.location.pathname)}>
                <TopBar />
                <Router />
            </HashRouter>
        </Box>
    )
}

const mapStateToProps = (state) => { return { profile: state.greduce.profile } }

const mapDispatchToProps = (dispatch) => {
    return {
        set_userData: (options) => {
            dispatch(set_userData(options))
        },
        set_roles: (options) => {
            dispatch(set_roles(options))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)