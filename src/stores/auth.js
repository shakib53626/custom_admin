import { defineStore }  from 'pinia';
import   axiosInstance  from '../service/axiosService';
import { useTokenStore }     from '../stores'
import router from '../router';

export const useAuthStore = defineStore('auth', {
    state:() => ({
        user          : {},
        isLoggedIn    : false,
        authPermission: {},
     }),

     persist:['user', 'isLoggedIn', 'authPermission'],

     getters:{
        getUser:(state) => {
            return state.user?.data;
        },
        getAuthStatus: (state) => {
            return state.isLoggedIn;
        }
     },

     actions:{
        async login(data){
            const token = useTokenStore();
            try {
                const res = await axiosInstance.post('/admin/login', data);
                if(res.data?.success){
                    this.user = res.data?.result?.user
                    token.setToken(res.data?.result?.token)
                    this.isLoggedIn = true;
                    this.authenticateUserPermission();
                    return res.data;
                }else{
                    return res.data?.message;
                }
            } catch (error) {
                if(error.response.data){
                    return error.response?.data;
                }
            }
        },

        async logout(){
            const token = useTokenStore();
            try {
                const res = await axiosInstance.post('/admin/logout');
                if(res.status === 200){
                    token.removeToken();
                    this.$reset();
                    router.push({name :'login'});
                    return res;
                }
            } catch (error) {
              if(error.response){                 
                    this.$reset();
                    router.push({name :'login'});
                    return error.response;
                }
            }
        },
     },

})

