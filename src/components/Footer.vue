<script></script>

<template>

    <div class="container">
        <div class="flex flex-col justify-between pl-5 footer-content sm:flex-row">
            <ul>
                <h3>Legal Notices</h3>
                <li>Terms of Service</li>
                <li>Legal Notice Based on the Act on Specified Commercial Transactions</li>
                <li>Disclosure Based on the Payment Services Act</li>
                <li>Derivative Works (Fan Creation) Guidelines</li>
            </ul>

            <div class="pt-5 about-qani ">
                <h3>Disclaimer</h3>

                <p>This is a learning project recreated by Qani,<br>
                    intended solely for educational purposes <br>and not for
                    commercial use or profit.<br>
                    For any questions or feedback,<br>
                    please contact: quoct0447@gmail.com.</p>

            </div>


            <div class="pt-5 pr-5 information">

                <h3>Information Qani</h3>

                <div class="flex flex-col">

                    <div class="flex cursor-pointer X">
                        <h4 class="pr-2">X Qani:</h4>
                        <a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                    </div>

                    <div class="flex pt-2 cursor-pointer tiktok">
                        <h4 class="pr-2">TikTok Qani:</h4>
                        <a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                    </div>

                    <div class="flex pt-2 cursor-pointer Facebook">
                        <h4 class="pr-2">FaceBook Qani:</h4>
                        <a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
                    </div>
                </div>


            </div>

        </div>
    </div>

</template>


<style scoped>
.footer-content {
    background-color: rgba(110, 88, 255, 0.3);

    /* lớp nền mờ nhẹ */
    backdrop-filter: blur(30px);
    
    -webkit-backdrop-filter: blur(30px);
    
    
}

h3 {
    font-size: 30px;
    font-weight: 500;
    padding-bottom: 10px;
}
</style>