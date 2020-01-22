# Server-Operation

## Script Management

### [Data Publication Log](http://transportation.austintexas.io/publisher/) shows an active job status log.

It's very important that the job server keeps from timing out.

### [knack-proxy](https://github.com/cityofaustin/knack-proxy) is a flask app.

This app takes 311 service requests from CTM ESB \(Enterprise Service Bus\). It acts as proxy for the Knack API since certificates don't work with ESB 🤷‍♂.

⚠️ If it goes down it will break the 311 integration with the data tracker which our TMC \(Traffic Management Center\) relies on. The flask app has never had issues \(_knocks on wood_\) but sometimes the ESB to proxy integration goes down. CTM handles the reboot. In this case, the TMC will say that they aren't getting updated Service Requests in data tracker. Omar at CTM is the person to talk to if ESB is having errors.

Data path: 311 SRs \(Motorola\) -&gt; Enterprise Service Bus \(CTM\) -&gt; knack-proxy \(ATD\) -&gt; Knack \(ATD instance\)

### [cctv-service](https://github.com/cityofaustin/atd-cctv-service/) is a sanic app.

Since we converted this code into an async [Sanic](https://github.com/huge-success/sanic) app we haven't had issues with it failing. But we did previously with Flask and never really got to understand the root issues.

If it goes down, log into atd-data01 via ssh and restart the containerized app with `docker restart cctv-service`.

### atd-data01 is our main/production data publishing server.

If atd-data01 crashes, it would just need to be restarted. Insert bash command `sudo reboot`. All of the data scripts are on cron jobs and will restart at various times. The two service app in docker containers on atd-data01 do need to be restarted manually. Those restart scripts live in their respective Github READMEs.

## Bash Commands

### Allocate Disk Space

1. List volumes and usage:

   ```bash
   $ df -h
   ```

2. Check the free available space in the Volume group

   ```bash
   $ vgdisplay /dev/mapper/root_vg
   ```

3. Extend the volume \(here, adding 8GB\)

   ```bash
   $ lvextend -L +8G /dev/mapper/root_vg-var_lv
   ```

4. Expand the volume:

   ```bash
   $ sudo xfs_growfs /dev/mapper/root_vg-var_lv
   ```

5. All done.

### Miscellaneous:

run all shell scripts inside a folder

```text
for shfile in *.sh; do sudo bash ./$shfile; done
```

scp transfer files from local to remote directory:

```text
scp /Users/ZWL/Documents/GitHub/transportation-data-publishing/transportation-data-publishing/config/secrets.py liangz@atdatmsscript:transportation-data-publishing/transportation-data-publishing/config/
```

### Amazon AWS

connect to instance

```text
ssh -i "<rse_key_filename>"  ec2-user@<server_ip>
```

