/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);

        FCMPlugin.onTokenRefresh(function(token){
            console.log(token);
            document.getElementById("registration").appendChild(document.createTextNode(token));
        });

        FCMPlugin.getToken(function(token){
            console.log(token);
            document.getElementById("registration").appendChild(document.createTextNode(token));
        });

        FCMPlugin.onNotification(function(data){
            var ul = document.getElementById("pushList");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(JSON.stringify(data)));
            ul.appendChild(li);
        });
    }
};

app.initialize();