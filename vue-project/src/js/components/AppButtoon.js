export default {

        template: `
        <button variant="primary"  :disabled="process">  <slot />    </button>
    `,

    data(){
        return {
                process: true 
        };
       }




    

}

