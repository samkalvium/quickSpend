import Home from "@containers/Home/Home";
import Login from "@containers/Auth/Login"; 
import AddExpense from "@containers/AddExpenses/AddExpenses"; 

const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/login",
        end: true,
        component: Login, 
    },
    {
        path: "/addExp",
        end: true,
        component: AddExpense, 
    },
];

export default routes;
