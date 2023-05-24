# muscarasoftware.com
Source code for our home website

# Install deployctl
```shell
$ deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

```shell
$ export PATH="/Users/username/.deno/bin:$PATH"
```

# Deployment
```shell
$ deployctl deploy --project=<muscarasoftware> https://deno.land/std@0.171.0/http/file_server.ts --token <token> --prod
```