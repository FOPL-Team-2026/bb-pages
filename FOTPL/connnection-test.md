---
layout: page
title: FOPL Backend Connection Test
permalink: /fopl-connection-test/
---

<h2>FOPL Frontend–Backend Connection</h2>

<p id="connection-status">Checking connection...</p>

<button id="test-api-button" type="button">
  Test Backend Connection
</button>

<h3>Backend API Response</h3>
<pre id="api-response"></pre>

<script>
(function () {
  "use strict";

  const API_URL = "http://localhost:8321/api/fopl/connection";

  async function testBackend() {
    const status = document.getElementById("connection-status");
    const output = document.getElementById("api-response");
    const button = document.getElementById("test-api-button");

    status.textContent = "Connecting to Flask...";
    output.textContent = "";
    button.disabled = true;

    try {
      const response = await fetch(API_URL, {
        method: "GET",
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
      }

      const data = await response.json();

      if (data.success === true) {
        status.textContent =
          "SUCCESS: Frontend connected to Flask!";
      } else {
        status.textContent =
          "FAILED: Backend returned an unsuccessful response.";
      }

      output.textContent = JSON.stringify(data, null, 2);

      console.log("FOPL API response:", data);

    } catch (error) {
      status.textContent =
        "FAILED: Cannot connect to Flask.";

      output.textContent =
        "Error: " + error.message;

      console.error("FOPL API connection error:", error);

    } finally {
      button.disabled = false;
    }
  }

  document
    .getElementById("test-api-button")
    .addEventListener("click", testBackend);

  testBackend();
})();
</script>
