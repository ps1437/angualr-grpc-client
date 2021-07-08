FROM envoyproxy/envoy-dev:909fdac5205edc64ba570847a46c126bde07a5e5
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml