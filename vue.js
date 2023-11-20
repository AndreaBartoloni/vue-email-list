const { createApp } = Vue;

createApp({
    data() {
        return {
            generateMail: []
        }
    },
    methods: {

    },
    mounted() {
        for(let i = 1; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                // resp.data = dati ottenuti in risposta dal server
                // resp.status = codice HTTP di risposta (es. 200)
                // resp.statusText = codice HTTP di risposta (es. OK)
                console.log("Ricevuto: ", resp.data);
    
                //se la risposta è ok
                if(resp.data.success) {
                    this.generateMail.push(resp.data.response);
                }
            });
        }
      
    },
}).mount('#app');