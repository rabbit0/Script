var body = $response.body;
body = '\/*\n@supported 365FD221A72B\n*\/\n' + body;

$done(body);
