import { useEffect } from "react";

const SendinblueWorker = () => {
    useEffect(() => {
        (function () {
            window.sib = window.sib || {
                equeue: [],
                client_key: "0e23fx7qvovwn1fio7l9g17a",
            };

            window.sendinblue = window.sendinblue || {};
            const methods = ["track", "identify", "trackLink", "page"];
            methods.forEach((method) => {
                window.sendinblue[method] = function () {
                    const args = Array.prototype.slice.call(arguments);
                    (window.sib[method] ||
                        function () {
                            const obj = {};
                            obj[method] = args;
                            window.sib.equeue.push(obj);
                        })(args[0], args[1], args[2]);
                };
            });

            const script = document.createElement("script");
            script.type = "text/javascript";
            script.id = "sendinblue-js";
            script.async = true;
            script.src = `https://sibautomation.com/sa.js?key=${window.sib.client_key}`;

            const firstScript = document.getElementsByTagName("script")[0];
            firstScript.parentNode.insertBefore(script, firstScript);

            script.onload = () => {
                window.sendinblue.page();
            };
        })();

        // start after 2 seconds 
        setTimeout(() => {
            (function (d, w, c) {
                w.SibConversationsID = '63ecf30e30fa536b8236917a';
                w[c] = w[c] || function () {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                const s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.sendinblue.com/sib-conversations.js';
                if (d.head) d.head.appendChild(s);
            })(document, window, 'SibConversations');
        }, 2000);
    }, []);

    return null; // This component does not render anything
};

export default SendinblueWorker;